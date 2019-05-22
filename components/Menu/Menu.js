const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.menu-nav');

menuBtn.addEventListener('click', (event) => {
    menu.classList.toggle('hide');
})