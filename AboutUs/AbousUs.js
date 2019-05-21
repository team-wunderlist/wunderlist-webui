class DeveloperProfile {
    constructor(root, info) {
        this.root = root;
        this.info = info;

        this.elements = this.createElements();

        this.populateElements(this.elements, this.info);

        this.appendElements(this.elements, this.root);
    }

    createElements() {
        let elements = {};
        elements.profile = document.createElement("div");
        elements.profile.classList.add("developer");

        elements.pictureContainer = document.createElement("div");
        elements.pictureContainer.classList.add("profile-picture");

        elements.profilePicture = document.createElement("img");
        elements.pictureContainer.appendChild(elements.profilePicture);
        elements.description = document.createElement("p");

        elements.nameContainer = document.createElement("div");
        elements.nameContainer.classList.add("name");
        elements.nameContainer.appendChild(document.createElement("span"));

        elements.name = document.createElement("h2");

        elements.nameContainer.appendChild(elements.name);
        elements.nameContainer.appendChild(document.createElement("span"));

        return elements;
    }

    populateElements(elements, info) {
        elements.name.textContent = info.name;

        elements.profilePicture.src = info.pictureURI;

        elements.description.textContent = info.description;
    }

    appendElements(elements, root){
        elements.profile.appendChild(elements.pictureContainer);
        elements.profile.appendChild(elements.description);
        elements.profile.appendChild(elements.nameContainer);
        root.appendChild(elements.profile);
    }
}

new DeveloperProfile(document.querySelector(".developer-info"), {name: "Aaron Thompson", description: "test", pictureURI: "AboutUs/profilesImages/aaron.png"});