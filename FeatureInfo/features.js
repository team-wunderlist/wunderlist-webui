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
        description: "We make it easy to overview all of your daily tasks coming up so you don't have to wonder what's coming up next. Just open the web app and we'll have your tasks prepared for you. Take a glance.",
        image: "assets/feature-2.svg"

    },
    {
        description: "Tasks can be changed and marked as done at any point, no matter where you are. Without an app downloaded clogging up your phone, you can access your todo list from anywhere on the go.",
        image: "assets/feature-1.svg"
    },
    {
        description: "We designed our interface to be easy for everyone to use and understand. In a pinch, we make it quick and easy for you to add tasks. With your tasks being hosted in the cloud, you'll never have to second guess if your tasks will be there when you get back, or when you open the app on a different device. We've got you covered.",
        image: "assets/feature-3.svg"
    },
]

let featureComponents = featureDataArray.map((data) => {
    return new Feature(document.querySelector(".features"), data);
})