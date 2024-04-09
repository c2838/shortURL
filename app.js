const express = require('express')
const app = express()
const port = 3000
// 記錄短網址的JSON檔路徑
const URLPath = './public/jsons/shortenURL'
// 載入Nodejs的fs system
const code_fs = require('fs')

// 根路徑
app.get('/', (req, res) => {
  res.send('Home page')
})

// 短網址完成後路徑
app.get('/shorten', (req, res) => {
  res.send('This is shorter')
})

//讀取短網址JSON檔
code_fs.readFile(URLPath, 'utf8', (err,data) => {
  if (err) console.error('err')
  else {
    let shortenURLs = shortenURLs ? JSON.parse(shortenURLs) : []
    shortenURLs.push(data)
    code_fs.writeFile(URLPath, JSON.stringify(shortenURLs), err =>{
      if (err) console.log('wirtten fail')
      else console.log('written sucess')
    })
  }
})



app.listen(port, () => {
  console.log(`express server is running on http://localhost:${port}`)
})