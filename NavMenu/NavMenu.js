class NavMenu {
    constructor() {
        
    }
}

class NavButton {
    constructor(root) {
        this.root = root;

        this.createElements();
        this.appendToRoot();
    }

    createElements() {
        this.button = document.createElement("button");
        this.button.classList.add("nav-button");

        this.spans = [];
        for (let _i = 0; _i < 3; _i++) {
            let span = document.createElement("span");
            this.spans.push(span);
            this.button.appendChild(span);
        }
    }
    appendToRoot() {
        this.root.appendChild(this.button);
    }
}

new NavButton(document.body);