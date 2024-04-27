// 載入fs system
const fs = require('fs')
// 紀錄路徑
const URLTablePath = './public/jsons/shortenURLTable.json'

function URLTableGenerator() {
  let URLTable = {}
  // 若有檔案則讀取資料並寫入URLTable物件並回傳，供server使用
  if(fs.existsSync(URLTablePath)) {
  try {
    let data = fs.readFileSync(URLTablePath)
    if (data) {
      URLTable = JSON.parse(data)
      return URLTable
    }
  }
  catch(err) {
    console.log(err)
  }
  } else {
  // 若無初始文件，則建立並寫入空物件
  fs.writeFileSync(URLTablePath, JSON.stringify(URLTable));
  }
}

module.exports = URLTableGenerator