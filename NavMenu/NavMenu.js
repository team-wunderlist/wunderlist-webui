const NavMenuAnimationDur = .3;

class NavMenu {
    constructor(root, button, links) {
        this.root = root;
        this.button = button;
        this.links = links;

        this.menuMoving = false;

        this.createMenu();
        this.createItems(this.links);

        this.appendMenu();
        this.fadeInDesktop();
        window.addEventListener("scroll", this.fadeInDesktop.bind(this));
    }

    createMenu() {
        this.nav = document.createElement("nav");
        this.nav.classList.add("navigation");

        this.tapLayer = document.createElement("div");
        this.tapLayer.setAttribute("style", `
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background-color: lightgrey;
            opacity:0;
        `);
        this.tapLayer.classList.add("tap-layer");

        this.background = document.createElement("div");
        this.background.classList.add("nav-background");
        this.background.dataset.open = "false";
    }

    createItems(links) {
        this.items = [];
        links.forEach(link => {
            let a = document.createElement("a");
            a.textContent = link.value;
            a.href = link.href;
            a.target = link.target;
            this.items.push(a);
            a.addEventListener("click", this.itemClick.bind(this));
        });
    }

    appendMenu() {
        this.nav.appendChild(this.background);
        this.nav.appendChild(this.tapLayer);
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
    itemClick(e) {
        TweenMax.fromTo(this.tapLayer, NavMenuAnimationDur * 2,
            {
                webkitClipPath: `circle(0px at ${e.clientX}px ${e.clientY}px)`,
                clipPath: `circle(0px at ${e.clientX}px ${e.clientY}px)`,
                opacity: 0.5
            },
            {
                webkitClipPath: `circle(200px at ${e.clientX}px ${e.clientY}px)`,
                clipPath: `circle(200px at ${e.clientX}px ${e.clientY}px)`,
                opacity: 0
            });
    }
    animateOpen() {
        this.menuMoving = true;
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
            this.menuMoving = false;
        }, NavMenuAnimationDur * 1000);
    }
    fadeInDesktop(e) {
        if(window.wunderlistUtils.GetCurrentBreakpoint() !== "desktop")
            return;
        if (!document.querySelector("#homepage-body")){
            this.background.dataset.open = "true";
            this.background.style.opacity = 1;
            return;
        }
        if (window.scrollY > 1  && this.background.dataset.open === "false"){
            this.background.dataset.open = "true";
            TweenMax.fromTo(this.background, NavMenuAnimationDur * 2,
                {
                    opacity: 0
                },
                {
                    opacity: 1
                });
        }
        if (window.scrollY <= 1) {
            this.background.dataset.open = "false";
            TweenMax.fromTo(this.background, NavMenuAnimationDur * 2,
                {
                    opacity: 1
                },
                {
                    opacity: 0
                });
        }
    }
}

class NavButton {
    constructor(root) {
        this.root = root;

        this.createElements();
        this.appendToRoot();

        this.menu;

        this.button.addEventListener("click", this.buttonClick.bind(this));
        window.addEventListener("scroll", this.checkColor.bind(this));

        if(document.querySelector(".background")){
            this.currentColor = "#F2F2F2"; // TODO: refactor colors
        }else {
            this.currentColor = "#262122";
            this.changeButtonColor("#262122");
        }
    }

    createMenu(links) {
        this.menu = new NavMenu(this.root, this, links);
        return this.menu;
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
        if (this.menu.nav.classList.contains("open")){
            this.changeButtonColor("#F2F2F2");
        } else {
            this.changeButtonColor(this.currentColor);
        }
    }
    changeButtonColor(color){
        this.spans.forEach((span) => {
            span.style.borderColor = color;
        })
    }
    checkColor() {
        let bg = document.querySelector(".background");
        if(!bg){
            this.currentColor = "#262122";
            this.changeButtonColor("#262122");
            return;
        }
        let bgRect = bg.getBoundingClientRect();
        let bgRadius = parseInt(getComputedStyle(bg).borderRadius);
        let roundedDistanceFromTop = bgRect.y + bgRect.height - ((bgRadius * Math.sqrt(2)) - bgRadius); // BoundingBox to top - diagonal difference between border and bounding box
        if (roundedDistanceFromTop < 0) {
            this.currentColor = "#262122"; // TODO: refactor colors
            this.changeButtonColor(this.currentColor);
        } else {
            this.currentColor = "#F2F2F2"; // TODO: refactor colors
            this.changeButtonColor(this.currentColor);
        }
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

let navMenuLinksArray = [
    {
        value: "Home",
        href: "index.html",
        target: ""
    },
    {
        value: "Login",
        href: "#",
        target: ""
    },
    {
        value: "Sign Up",
        href: "#",
        target: ""
    },
    {
        value: "About us",
        href: "aboutus.html",
        target: ""
    },

]

let mobileNavButton = new NavButton(document.body);
mobileNavButton.createMenu(navMenuLinksArray);