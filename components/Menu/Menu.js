const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', (event) => {
    menu.classList.toggle('hide');
    console.log(menu)
})