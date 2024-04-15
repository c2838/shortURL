// 短網址輸出函式
function shortenURL() {
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
  return fiveCodeString 
}

module.exports = shortenURL