class NavBar {
    constructor(root) {
        this.root = root;
        
        this.createBar()
        this.createElemements();

        this.appendElements();
    }

    createBar() {
        this.header = document.createElement("header");
        this.nav = document.createElement("nav");

        this.header.classList.add("nav-bar");
        this.header.appendChild(this.nav);
    }

    createElemements() {
        this.logo = document.createElement("h2");
        this.logo.textContent = "Wunderlist 2.0";

        this.registerTab = document.createElement("div");
        this.registerTab.classList.add("register-tab");

        this.signUp = document.createElement("button");
        this.signUp.textContent = "Sign Up";

        this.buttonDevider = document.createElement("span");

        this.login = document.createElement("button");
        this.login.textContent = "Login";

        this.registerTab.appendChild(this.signUp);
        this.registerTab.appendChild(this.buttonDevider);
        this.registerTab.appendChild(this.login);
    }

    appendElements() {
        this.nav.appendChild(this.logo);
        this.nav.appendChild(this.registerTab);

        this.root.insertBefore(this.header, this.root.firstChild);
    }
}

new NavBar(document.body);