// 載入epress
const express = require('express')
const app = express()
const port = 3000
// 載入express-handlebars
const { engine } = require('express-handlebars')
// 使用express-handlebars作為樣板
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './views');
// 使用靜態文件
app.use(express.static('public'))
// 載入middleware解析POST request，開關為true，解析資料型態可不只為string or array
app.use(express.urlencoded({ extended: true }))
// 載入Nodejs的fs system
const fs = require('fs')
// 載入短網址代碼
const shortenURL = require('./utilites/shortenURL')
// 記錄短網址的JSON檔路徑
const URLTablePath = './public/jsons/shortenURLTable.json'

// 建立短網址轉換表，並檢查檔案是否存在
let URLTable = {}
if(fs.existsSync(URLTablePath)) {
  try {
    const data = fs.readFileSync(URLTablePath)
    URLTable = JSON.parse(data)
  }
  catch(err) {
    console.log(err)
  }
}

// 根路徑
app.get('/', (req, res) => {
  res.redirect('/shortenURL')
})

// 短網址完成後路徑
app.get('/shortenURL', (req, res) => {
  res.render('index')
})

app.post('/shortenURL', (req, res) => {
  const longURL = req.body.inputURL
  // 檢查輸入是否為空
  if (!longURL) {
    console.log('網址不得為空')
    res.redirect('/')
    return
  }
  // 檢查是否有相同的網址
  if (Object.keys(URLTable).includes(longURL)) {
    let shortURL = URLTable[longURL]
    res.render('index', { shortURL })
  } else {
    let shortURL = shortenURL()
    URLTable[longURL] = shortURL
    // 將新網址寫入JSON
    fs.writeFileSync(URLTablePath, JSON.stringify(URLTable))
    res.render('index', { shortURL })
  }
})

// 利用短網址導向回原始網頁
app.get('/:fiveCode', (req, res) => {
  let fiveCode = req.params.fiveCode
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