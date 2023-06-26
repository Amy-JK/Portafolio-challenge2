
let dropMenu = document.getElementById('drop')
let btnMenu = document.querySelector('#btnMenu')
let btnClose = document.querySelector('#btnClose')
let dropLi = document.querySelectorAll('#drop-li')

btnMenu.addEventListener('click', function() {
    dropMenu.classList.add('drop-open')
    dropMenu.classList.remove('drop-close')
})

btnClose.addEventListener('click', function() {
    dropMenu.classList.add('drop-close')
    dropMenu.classList.remove('drop-open')
})

dropLi.forEach(li => li.addEventListener('click', function(){
    dropMenu.classList.remove('drop-open')
}))
