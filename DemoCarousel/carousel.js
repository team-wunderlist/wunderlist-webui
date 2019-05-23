class Carousel {
    constructor(container, items) {
        this.container = container;
        this.items = items;
        this.setupItems();
    }

    setupItems() {
        let middleScreen = window.innerWidth
        this.items.forEach((item) => {
            var rect = item.getBoundingClientRect();
            item.dataset.centerTransform = `translateX(-${rect.left}px) translateX(50vw) translateX(-50%)`;
        })
    }
}

new Carousel(document.querySelector(".features"), Array.from(document.querySelectorAll(".feature-info")));