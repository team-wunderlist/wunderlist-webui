class NavLink {
    constructor(link) {
        this.link = link;

        this.link.addEventListener('mouseover', (event) => {
            TweenMax.to(this.link, 0.20, {borderBottom: '2px solid #005366'});
        })

        this.link.addEventListener('mouseleave', (event) => {
            TweenMax.to(this.link, 0.20, {borderBottom: '2px solid #FFFFF0'});
        })
    }
}

let menuNav = document.querySelector('.menu-nav');
let links = menuNav.querySelectorAll('a');

links.forEach(link => {
    return new NavLink(link);
})