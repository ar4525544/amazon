  let closeBtn  =  document.getElementById('close-btn');
  let  menu = document.getElementById('menu');
  let testBtn = document.getElementById('test');
  let bodyBtn = document.getElementById('body')
closeBtn.addEventListener('click', function () {
    
    menu.style.display = 'none'
})
testBtn.addEventListener('click', function () {
    menu.style.display = 'block'
})
bodyBtn.addEventListener('click', function () {
    body.style.display = 'black'
})
