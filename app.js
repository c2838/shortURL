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
// 載入middleware解析POST request
app.use(express.urlencoded({ extended: true }))
// 載入Nodejs的fs system
const fs = require('fs')
// 載入短網址代碼
const shortenURL = require('./utilites/shortenURL')
// 記錄短網址的JSON檔路徑
const URLTablePath = './public/jsons/shortenURLTable'


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
  console.log(longURL)
  // 檢查輸入是否為空
  // if (!longURL) return 
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


app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})