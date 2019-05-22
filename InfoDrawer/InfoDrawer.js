let infoDrawerExpandDur = 0.3;
class InfoDrawer {
    constructor(root, content) {
        this.root = root;
        this.content = content;

        this.elements = this.createElementTree();

        this.populateElements(this.elements, this.content);

        this.appendElements(this.elements, this.root);

        this.elements.container.addEventListener("click", this.expandDrawer.bind(this))
    }

    createElementTree() {
        let elements = {};
        elements.container = document.createElement("div");
        elements.container.classList.add("info-drawer");
        elements.title = document.createElement("h2");
        elements.container.appendChild(elements.title);

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
    }

    appendElements(elements, root) {
        root.appendChild(elements.container);
    }

    expandDrawer() {
        if(window.wunderlistUtils.GetCurrentBreakpoint() !== "mobile")
            return;
        let description = this.elements.description;
        if (this.elements.container.classList.contains("open")){
            description.style.display = "none";
            TweenMax.to(this.elements.container,infoDrawerExpandDur / 2, {
                borderRadius: "50%",
                width: "80vw"
            })
            TweenMax.to(this.elements.title,infoDrawerExpandDur / 2, {
                top: "50%",
            })

        } else {
            TweenMax.to(this.elements.title,infoDrawerExpandDur, {
                top: "5%",
            })
            TweenMax.to(this.elements.container,infoDrawerExpandDur, {
                borderRadius: "0%",
                width: "100vw"
            })
            setTimeout( () => {
                description.style.display = "block";
                TweenMax.fromTo(description, infoDrawerExpandDur * .8, 
                {
                    opacity: 0
                },
                {
                    opacity: 1
                })
            }, infoDrawerExpandDur * 1000);
        }
        this.elements.container.classList.toggle("open");
    }
}
let appInfoContainer = document.querySelector(".app-info");
new InfoDrawer(appInfoContainer, {
    title: "Product info 1",
    description: "Infomation about product"
})
new InfoDrawer(appInfoContainer, {
    title: "Product info 2",
    description: "Infomation about product"
})
new InfoDrawer(appInfoContainer, {
    title: "Product info 3",
    description: "Infomation about product"
})