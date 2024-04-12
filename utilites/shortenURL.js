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
  const shortURLBase = 'https://localhost:3000/'
  let fiveCodeString = fiveCodesArr.join('')
  return shortURLBase + fiveCodeString 
}

module.exports = shortenURL