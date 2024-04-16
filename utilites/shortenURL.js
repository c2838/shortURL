// 短網址輸出函式
function shortenURL() {
  // const URLs = require('./public/jsons/shortenURLTable.json')
  let upperChar = [...Array(26)].map((_, i) => {
    return String.fromCharCode(i + 65)
  })
  let lowerChar = [...Array(26)].map((_, i) => {
    return String.fromCharCode(i + 97)
  })
  let num = [...Array(10)].map((_, i) => i)
  let digit = num.concat(upperChar, lowerChar)
  let fiveCodesArr = []
  for (let i = 0; i < 5; i++) {
    let random = digit[Math.floor(Math.random() * 62)]
    fiveCodesArr.push(random)
  }
  let fiveCodeString = fiveCodesArr.join('')
  // 檢查是否有重複五位英數字
  // for (let key of Object.keys(URLs)) {
  //     if (fiveCodeString === URLs[key]) {
  //       return shortenURL()
  //     }
  //   }
  return fiveCodeString 
}

module.exports = shortenURL