const URLTableGenerator = require('./URLTableGenerator')

// 建立英數字陣列
const upperChars = [...Array(26)].map((_, i) => {
  return String.fromCharCode(i + 65)
})
const lowerChars = [...Array(26)].map((_, i) => {
  return String.fromCharCode(i + 97)
})
const nums = [...Array(10)].map((_, i) => i)
// const digits = nums.concat(upperChars, lowerChars)
const digits = [...upperChars, ...lowerChars, ...nums]

// 讀取URL對照表，用以檢查是否有重複英數字組
let URLTable = {}
URLTableGenerator(URLTable)

// 短網址輸出函式
function shortenURL() {

  const fiveCodesArr = []
  for (let i = 0; i < 5; i++) {
    const random = digits[Math.floor(Math.random() * 62)]
    fiveCodesArr.push(random)
  }
  let fiveCodeString = fiveCodesArr.join('')
  // 檢查是否有重複五位英數字
  for (let key of Object.keys(URLTable)) {
      if (fiveCodeString === URLTable[key]) {
        return shortenURL()
      }
    }
    console.log(URLTable)
  return fiveCodeString 
}

module.exports = shortenURL