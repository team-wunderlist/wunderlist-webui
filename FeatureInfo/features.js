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
        elements.feature.classList.add("feature-info");
        
        elements.description = document.createElement("p");

        elements.feature.appendChild(elements.description);
        
        if(this.data.image){
            elements.image = document.createElement("div");
            elements.feature.appendChild(elements.image);
        }

        return elements
    }

    populateElements(elements, data) {
        elements.description.textContent = data.description;
        if (data.image) {
            elements.image.style.backgroundImage = `url(${data.image})`;
        } else {
            elements.feature.classList.add("no-image");
        }
    }

    appendElements(root, elements) {
        root.appendChild(elements.feature);
    }
}

let featureDataArray = [
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "assets/test-image.png"

    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "assets/test-image.png"
    },
    {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: "assets/test-image.png"
    },
]

let featureComponents = featureDataArray.map((data) => {
    return new Feature(document.querySelector(".features"), data);
})