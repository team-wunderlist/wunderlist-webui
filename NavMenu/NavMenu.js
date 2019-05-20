const NavMenuAnimationDur = .3;

class NavMenu {
    constructor(root, button) {
        this.root = root;
        this.button = button;

        this.menuMoving = false;

        this.createMenu();
        this.createItems();

        this.appendMenu();
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

    appendMenu() {
        this.items.forEach((item) => this.nav.appendChild(item));
        this.root.appendChild(this.nav);
    }

    open() {
        if(!this.menuMoving){
            if (this.nav.classList.contains("open")) {
                this.animateClose();
            } else {
                this.animateOpen();
            }
            this.nav.classList.toggle("open");
        }
    }
    animateOpen() {
        this.menuMoving = true;
        this.nav.style.display = "flex";
        let diagonal = Math.sqrt((window.innerHeight ** 2) +(window.innerWidth ** 2));
        TweenMax.fromTo(this.nav, NavMenuAnimationDur,
            {
                webkitClipPath: "circle(0px at 100% 0)",
                clipPath: "circle(0px at 100% 0)"
            },
            {
                webkitClipPath: `circle(${diagonal}px at 100% 0)`,
                clipPath: `circle(${diagonal}px at 100% 0)`
            });
        setTimeout(() => {
            this.menuMoving = false;
        }, NavMenuAnimationDur * 1000);
    }
    animateClose() {
        this.menuMoving = true;
        let diagonal = Math.sqrt((window.innerHeight ** 2) +(window.innerWidth ** 2));
        TweenMax.fromTo(this.nav, NavMenuAnimationDur,
            {
                webkitClipPath: `circle(${diagonal}px at 100% 0)`,
                clipPath: `circle(${diagonal}px at 100% 0)`
            },
            {
                webkitClipPath: "circle(0px at 100% 0)",
                clipPath: "circle(0px at 100% 0)"
            });
        setTimeout(() => {
            this.nav.style.display = "none";
            this.menuMoving = false;
        }, NavMenuAnimationDur * 1000);
    }
}

class NavButton {
    constructor(root) {
        this.root = root;

        this.createElements();
        this.appendToRoot();

        this.menu = new NavMenu(root, this);

        this.button.addEventListener("click", this.buttonClick.bind(this));
        window.addEventListener("scroll", this.changeColor.bind(this));
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
    changeColor() {
        let bg = document.querySelector(".background");
        let bgRect = bg.getBoundingClientRect();
        console.log("Rect", bgRect);
        console.log("radius",  parseInt(getComputedStyle(bg).borderRadius));
        console.log(bgRect.y + bgRect.height - parseInt(getComputedStyle(bg).borderRadius));
        // I tried to check the element underneath for it's color. It kind of worked but not well. Will do manually with the background

/*         let navPosition = this.button.getBoundingClientRect();
        let elementBelow = document.elementFromPoint(navPosition.top + 1, navPosition.left + 1);
        console.log(elementBelow);
        let color = getComputedStyle(elementBelow).backgroundColor;
        if (ColorIslight(color)) {
            this.spans.forEach((span) => {
                span.style.borderColor = "#262122";
            })
        } else {
            this.spans.forEach((span) => {
                span.style.borderColor = "#F2F2F";
            })
        } */
    }

    
}

function NavMenuCalculateBoundingBox(element){
    let bx = element.clientWidth; // Width of rectangle
    let by = element.clientHeight; // Height of rectangle
    let style = getComputedStyle(element);
    let t = /[0-9]+/.exec(style.transform)[0] * Math.PI / 180; // Convert to radians

    let x = Math.sin(t) * by + Math.cos(t) * bx; // The bounding box width
    let y = Math.sin(t) * bx + Math.cos(t) * by; // The bounding box height
    return {x: x, y: y};
}

function ColorIslight(color) {
    var r, g, b, hsp;

    if (color.match(/^rgb/)) {

        // If HEX --> store the red, green, blue values in separate variables
        color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        
        r = color[1];
        g = color[2];
        b = color[3];
    } 
    else {
        
        // RGB to HEX
        color = +("0x" + color.slice(1).replace( 
        color.length < 5 && /./g, '$&$&'));
        
        //Bitshift hex
        r = color >> 16;
        g = color >> 8 & 255;
        b = color & 255;
    }
    hsp = Math.sqrt(
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
    );
    if (hsp>127.5) {

        return true;
    } 
    else {

        return false;
    }
}
new NavButton(document.body);