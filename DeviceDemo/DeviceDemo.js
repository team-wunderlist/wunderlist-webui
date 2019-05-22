class DeviceShowcase {
    constructor(root) {
        this.root = root;

        this.elements = this.createDevices();

        appendElements(root, this.elements);
    }

    createDevices() {
        elements = [];
        elements.container = document.createElement("div");
        elements.container.classList.add("device-showcase");

        this.desktop = new DeviceDesktop(elements.container);
        this.smartphone = new DeviceSmartphone(elements.container);

        elements.desktop = this.desktop.elements.frame;
        elements.smartphone = this.smartphone.elements.frame;
        return elements
    }

    appendElements(root, elements) {
        root.appendChild(elements.container);
    }
}

class DeviceDesktop {
    constructor(container) {
        this.container = container;

        this.elements = this.createDeviceElements();

        appendElements(container, this.elements);

        this.screen = this.elements.screen;
    }

    createDeviceElements() {
        elements = [];
        elements.frame = document.createElement("div");
        elements.frame.classList.add("desktop-device");
        
        elements.screen = document.createElement("div");
        elements.screen.classList.add("screen");
        
        elements.camera = document.createElement("span");
        elements.camera.classList.add("camera");

        elements.frame.appendChild(elements.camera);
        elements.frame.appendChild(elements.screen);

        return elements
    }

    appendElements(root, elements) {
        root.appendChild(elements.frame);
    }

    populateScreen(element) {
        this.screen.appendChild(element);
    }
}

class DeviceSmartphone {
    constructor(container) {
        this.container = container;

        this.elements = this.createDeviceElements();

        appendElements(container, this.elements);

        this.screen = this.elements.screen;
    }

    createDeviceElements() {
        elements = [];
        elements.frame = document.createElement("div");
        elements.frame.classList.add("phone-device");
        
        elements.screen = document.createElement("div");
        elements.screen.classList.add("screen");
        
        elements.camera = document.createElement("span");
        elements.camera.classList.add("camera");

        elements.speaker = document.createElement("span");
        elements.camera.classList.add("speaker");

        elements.homeButton = document.createElement("span");
        elements.homeButton.classList.add("home-button");

        elements.frame.appendChild(elements.camera);
        elements.frame.appendChild(elements.speaker);
        elements.frame.appendChild(elements.screen);
        elements.frame.appendChild(elements.homeButton);
        

        return elements
    }

    appendElements(root, elements) {
        root.appendChild(elements.frame);
    }

    populateScreen(element) {
        this.screen.appendChild(element);
    }
}