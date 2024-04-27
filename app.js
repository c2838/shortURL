// 載入epress
const express = require('express')
const app = express()
const port = 3000
// 載入express-handlebars
const { engine } = require('express-handlebars')
// 載入Nodejs的fs system
const fs = require('fs')
// 載入短網址代碼函式
const shortenURL = require('./utilites/shortenURL')
// 載入URLTable創建函式
const URLTableGenerator = require('./utilites/URLTableGenerator')
// 建立短網址轉換表物件變數，順帶檢查檔案是否存在
const URLTable = URLTableGenerator()
// 記錄短網址的JSON檔路徑
const URLTablePath = './public/jsons/shortenURLTable.json'

// 使用express-handlebars作為樣板
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
// 使用靜態文件
app.use(express.static('public'))
// 載入middleware解析POST request，開關為true，解析資料型態可不只為string or array
app.use(express.urlencoded({ extended: true }))

// 根路徑
app.get('/', (req, res) => {
  res.redirect('/shortenURL')
})

// 短網址完成後路徑
app.get('/shortenURL', (req, res) => {
  res.render('index')
})

// 利用post方法傳送原始網址
app.post('/shortenURL', (req, res) => {
  const longURL = req.body.inputURL
  // 檢查是否有相同的網址
  if (Object.keys(URLTable).includes(longURL)) {
    let shortURL = URLTable[longURL]
    res.render('index', { shortURL })
  } else {
    // 若無相同網址則新建短網址
    let shortURL = shortenURL()
    URLTable[longURL] = shortURL
    // 將新網址寫入JSON
    fs.writeFileSync(URLTablePath, JSON.stringify(URLTable))
    res.render('index', { shortURL })
  }
})

// 利用短網址導向回原始網頁
app.get('/:fiveCode', (req, res) => {
  const fiveCode = req.params.fiveCode
  for(let key in URLTable) {
    if (URLTable[key] === fiveCode) {
      res.redirect(key)
      return
    }
  }
  // 若無對應短網址則報錯
  res.status(404).send('Sorry, the shortURL is not found.')
})

app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})