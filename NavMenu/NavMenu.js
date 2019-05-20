class NavMenu {
    constructor(root, button) {
        this.root = root;
        this.button = button;

    }

    createMenu() {
        this.nav = document.createElement("nav");
        this.nav.classList.add("mobile-nav");
        this.nav.style.display = "none";
    }

    createItems() {
        this.items = [];
        this.items[0] = document.createElement("a");
        this.items[1] = document.createElement("a");
        this.items[2] = document.createElement("a");
        this.items[3] = document.createElement("a");

        this.items[0].textContent = "Home";
        this.items[1].textContent = "Login";
        this.items[2].textContent = "Sign Up";
        this.items[3].textContent = "About Us";
    }

    open() {
        if (this.nav.classList.contains("open")) {
            animateClose();
        } else {
            animateOpen();
        }
        this.nav.classList.toggle("open");
    }
    animateOpen() {

    }
    animateClose() {

    }
}

class NavButton {
    constructor(root) {
        this.root = root;

        this.createElements();
        this.appendToRoot();

        this.menu = new NavMenu(root, this);

        this.button.addEventListener("click", this.buttonClick.bind(this));
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

    buttonClick(e) {
        e.stopPropagation();
        this.menu.open();
    }
}

new NavButton(document.body);