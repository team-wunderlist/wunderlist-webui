class Carousel {
    constructor(container, items) {
        this.container = container;
        this.items = items;
        this.setupItems();
    }

    setupItems() {
        let middleScreen = window.innerWidth;
        let middleItem = Math.floor(this.items.length / 2);
        let offsetTransforms = this.calculateTransforms(middleItem);
        console.log(offsetTransforms);
        this.items.forEach((item, index) => {
            var rect = item.getBoundingClientRect();
            var centerTransform = ` translateX(-${90 * index}vw) translateX(50vw) translateX(-50%)`
            item.dataset.centerTransform = centerTransform;

            item.style.transform = centerTransform + offsetTransforms[index];
        })

        
    }

    calculateTransforms(target){
        let transforms = this.items.map((item, index) => {
            return `translateX(${(index - target) * 80}vw)`;
        })
        return transforms;
    }
}

/* new Carousel(document.querySelector(".features"), Array.from(document.querySelectorAll(".feature-info"))); */