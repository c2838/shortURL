async function copyURL() {
  let URL = document.querySelector('#shortURL')
  try {
    await navigator.clipboard.writeText(URL.innerText)
    alert('copy already sucessed')
  }
  catch(err) {
    console.log(err)
  }
}