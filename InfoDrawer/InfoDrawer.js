class InfoDrawer {
    constructor(root, content) {
        this.root = root;
        this.content = content;
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
    }

    populateElements(elements, content) {
        elements.title.textContent = content.title;
        elements.description = content.description;
    }

    appendElements(elements, root) {
        root.appendChild(elements.container);
    }
}