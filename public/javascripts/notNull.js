// 檢查輸入欄位是否有值
function notNull(event) {
  // 先阻止表單預設行為
  event.preventDefault();
  const value = document.querySelector('#inputColumn').value;
  // 若值為空則顯示警告視窗
  if (!value) {   
    alert('網址不得為空');
  } else {
    // 如果值不為空，則執行表單提交的動作
    event.target.closest('form').submit(); // 使用 closest 方法找到最近的表單元素並提交
  }
}