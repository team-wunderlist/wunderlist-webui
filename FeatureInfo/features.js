class Feature {
    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.elements = this.createElements();

        this.populateElements(this.elements, data);
        this.appendElements(container, this.elements);
    }

    createElements() {
        let elements = [];
        elements.feature = document.createElement("div");
        elements.feature.classList.add("info-card");
        
        elements.description = document.createElement("p");

        elements.feature.appendChild(elements.description);
        
        if(this.data.image){
            elements.image = document.createElement("img");
            elements.feature.appendChild(elements.image);
        }

        return elements
    }

    populateElements(elements, data) {
        elements.description.textContent = data.description;
        if (data.image) {
            elements.image.src = data.image;
        } else {
            elements.description.classList.add("no-image");
        }
    }

    appendElements(root, elements) {
        root.appendChild(elements.feature);
    }
}