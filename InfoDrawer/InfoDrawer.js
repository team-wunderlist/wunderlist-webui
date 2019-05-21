class InfoDrawer {
    constructor(root, content) {
        this.root = root;
        this.content = content;

        this.elements = this.createElementTree();

        this.populateElements(this.elements, this.content);

        this.appendElements(this.elements, this.root);
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
        elements.description = content.description;
        elements.expandButton.textContent = "+";
    }

    appendElements(elements, root) {
        root.appendChild(elements.container);
    }
}
let appInfoContainer = document.querySelector(".app-info");
new InfoDrawer(appInfoContainer, {
    title: "Manage your time",
    description: "Wunderlist allows you to manage your time effectivly and schedual your day in the way you want"
})
new InfoDrawer(appInfoContainer, {
    title: "Manage your time",
    description: "Wunderlist allows you to manage your time effectivly and schedual your day in the way you want"
})
new InfoDrawer(appInfoContainer, {
    title: "Manage your time",
    description: "Wunderlist allows you to manage your time effectivly and schedual your day in the way you want"
})