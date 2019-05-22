class PersonImg {
    constructor(img) {
        this.img = img;

        this.img.addEventListener('mouseover', (event) => {
            TweenMax.to(this.img, 0.2, {transform: 'scale(1.05)'});
        })

        this.img.addEventListener('mouseleave', (event) => {
            TweenMax.to(this.img, 0.2, {transform: 'scale(1)'});
        })
    }
}

let peopleImgs = document.querySelectorAll('.person-img');
peopleImgs.forEach(img => {
    return new PersonImg(img);
})