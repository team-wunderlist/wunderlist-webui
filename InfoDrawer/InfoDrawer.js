let infoDrawerExpandDur = 0.3;
class InfoDrawer {
    constructor(root, content) {
        this.root = root;
        this.content = content;

        this.elements = this.createElementTree();

        this.populateElements(this.elements, this.content);

        this.appendElements(this.elements, this.root);

        this.elements.container.addEventListener("click", this.expandDrawer.bind(this));
    }

    createElementTree() {
        let elements = {};
        elements.container = document.createElement("div");
        elements.container.classList.add("info-drawer");
        elements.title = document.createElement("h2");
        elements.container.appendChild(elements.title);

        elements.image = document.createElement("div");
        elements.container.appendChild(elements.image);
        elements.image.classList.add("info-icon");

        elements.expandButton = document.createElement("span");
        elements.expandButton.classList.add("expand-button");
        
        elements.container.appendChild(elements.expandButton);

        elements.description = document.createElement("p");
        elements.container.appendChild(elements.description);

        return elements;
    }

    populateElements(elements, content) {
        elements.title.textContent = content.title;
        elements.description.textContent = content.description;
        elements.expandButton.textContent = "+";
        elements.image.style.backgroundImage = `url(${content.image})`;
    }

    appendElements(elements, root) {
        root.appendChild(elements.container);
    }

    expandDrawer() {
        let description = this.elements.description;
        if (this.elements.container.classList.contains("open")){
            let fromHeight =  description.clientHeight;
            if (window.wunderlistUtils.GetCurrentBreakpoint() === "mobile"){
                TweenMax.to(this.elements.container,infoDrawerExpandDur / 2, {
                    borderRadius: "50%",
                    width: "80vw",
                    padding: "0 0rem",
                    clearProps:"all"
                })
            }
            TweenMax.to(this.elements.title,infoDrawerExpandDur / 2, {
                marginTop: "1em",
            })
            TweenMax.to(this.elements.description, infoDrawerExpandDur / 2, {
                marginBottom: "0em",
            })
            TweenMax.to(this.elements.image, infoDrawerExpandDur / 2, {
                marginBottom: "5rem",
            })
            TweenMax.to(this.elements.expandButton, infoDrawerExpandDur / 2, {
                transform: `rotate(0deg)`,
            })
            TweenMax.fromTo(description, infoDrawerExpandDur / 2, {
                height: `${fromHeight}px`,
            },
            {
                height: `0px`,
            })

        } else {
            description.style.height = "auto";
            let targetHeight = description.clientHeight;
            description.style.height = "0px";
            TweenMax.to(this.elements.title,infoDrawerExpandDur, {
                marginTop: "0em",
            })
            if (window.wunderlistUtils.GetCurrentBreakpoint() === "mobile"){
                TweenMax.to(this.elements.container,infoDrawerExpandDur, {
                    borderRadius: "2rem",
                    width: "90vw",
                    padding: "0 1rem",
                })
            }
            TweenMax.to(this.elements.description, infoDrawerExpandDur, {
                marginBottom: "2em",
            })
            TweenMax.to(this.elements.image, infoDrawerExpandDur, {
                marginBottom: "2rem",
            })
            TweenMax.to(this.elements.expandButton, infoDrawerExpandDur, {
                transform: `rotate(45deg)`,
            })
            TweenMax.fromTo(description, infoDrawerExpandDur, {
                height: `0px`,
                opacity: 0,
            },
            {
                height: `${targetHeight}px`,
                opacity: 1
            })
        }
        this.elements.container.classList.toggle("open");
    }
}
let appInfoContainer = document.querySelector(".app-info");
new InfoDrawer(appInfoContainer, {
    title: "Manage your time",
    description: "Wunderlist allows you to manage your time effectivly and efficiently. Your daily tasks will become a breeze with recurring tasks and one-off’s slotting into your busy schedule intelligently",
    image: "assets/clock.svg"
})
new InfoDrawer(appInfoContainer, {
    title: "Product info 2",
    description: "Infomation about product",
    image: "assets/clock.svg"
})
new InfoDrawer(appInfoContainer, {
    title: "Product info 3",
    description: "Infomation about product",
    image: "assets/clock.svg"
})