const menu = document.getElementById('mobile__menu');
const navbar = document.querySelector('.navbar__menu')

menu.addEventListener('click', ()=>{
    navbar.classList.toggle('active');
    menu.classList.toggle('is-active')
})