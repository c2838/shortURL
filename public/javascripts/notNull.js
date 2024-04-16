// 檢查輸入欄位是否有值
function notNull() {
  let value = document.querySelector('#inputColumn').innerText
  if (!value) {
    alert('網址不得為空')
    return
  } else return
}