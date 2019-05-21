class DeveloperProfile {
    constructor(root, info) {
        this.root = root;
        this.info = info;

        this.elements = createElements();
    }

    createElements() {
        let elements = {};
        elements.profile = document.createElement("div");
        elements.profile.classList.add("developer");

        elements.pictureContainer = document.createElement("div");
        elements.pictureContainer.classList.add("profile-picture");

        elements.profilePicture = document.createElement("img");

        elements.description = document.createElement("p");

        elements.nameContainer = document.createElement("div");
        elements.nameContainer.classList.add("name");
        elements.nameContainer.appendChild(document.createElement("span"));

        elements.name = document.createElement("h2");

        elements.nameContainer.appendChild(this.name);
        elements.nameContainer.appendChild(document.createElement("span"));

        return elements;
    }
}