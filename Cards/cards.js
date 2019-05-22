class Card {
    constructor(container, data) {
        this.container = container;
        this.data = data;
        this.elements = this.createElements();
        
        this.populateElements(this.elements, data);
        this.appendElements(container, this.elements);
    }

    createElements() {
        let elements = [];
        elements.card = document.createElement("div");
        elements.card.classList.add("info-card");
        
        elements.description = document.createElement("p");

        elements.card.appendChild(elements.description);
        
        if(this.data.image){
            elements.image = document.createElement("img");
            elements.card.appendChild(elements.image);
        }

        return elements
    }

    populateElements(elements, data) {
        elements.description.textContent = data.description;
        if (data.image) {
            elements.image.src = data.image;
        }
    }

    appendElements(root, elements) {
        root.appendChild(elements.card);
    }
}