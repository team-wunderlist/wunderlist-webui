class Button {
    constructor(btn) {
        this.btn = btn;

        this.btn.addEventListener('mouseover', (event) => {
            TweenMax.to(this.btn, 0.2, {backgroundColor: '#FFFFF0'});
            TweenMax.set(this.btn, {color: '#F56358'})
        })

        this.btn.addEventListener('mouseleave', (event) => {
            TweenMax.to(this.btn, 0.2, {backgroundColor: '#F56358'});
            TweenMax.set(this.btn, {color: '#FFFFF0'})
        })
    }
}

let btns = document.querySelectorAll('.sign-up-btn');

btns.forEach(btn => {
    return new Button(btn);
})