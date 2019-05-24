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

        elements.profilePicture = document.createElement("div");
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

        elements.profilePicture.style.backgroundImage = `url(${info.pictureURI})`;

        elements.description.textContent = `"${info.description}"`;
    }

    appendElements(elements, root){
        elements.profile.appendChild(elements.pictureContainer);
        elements.profile.appendChild(elements.description);
        elements.profile.appendChild(elements.nameContainer);
        root.appendChild(elements.profile);
    }
}

// Developers
const DeveloperArray = [
    {
        name: "Leonel Flores",
        description: "I'm 26 years old and an aspiring developer/programmer going to Lamnda school to jump into the career I've always wanted.",
        pictureURI: "AboutUs/profilesImages/leonel.jpg"
    },
    {
        name: "Aaron Thompson", 
        description: "I am a 20 year old developer who has been developing software at home for 6 years. I have joined Lambda to make my dreams a reality and to further my passion.", 
        pictureURI: "AboutUs/profilesImages/aaron.png"
    },
    {
        name: "Mario Amaya",
        description: "I am 34 years old, and I have a background in Media Production and Video Editing.  I am currently at Lambda School looking to expand my skill set and peruse a new career.",
        pictureURI: "AboutUs/profilesImages/mario.jpg"
    },
    {
        name: "Brandon Porter",
        description: "I am a 34 year old programmer/web developer joining lambda to get a better degree and, from that, a better career.",
        pictureURI: "AboutUs/profilesImages/brandon.jpg"
    },
    {
        name: "Christian Pelayo",
        description: "I'm 23 years old and am really just looking expand my knowledge of software development through Lambda School.",
        pictureURI: "AboutUs/profilesImages/christian.jpg"
    },
    {
        name: "Thomas Tuttle",
        description: "I'm an aspiring coconut merchant from Fayetteville NC learning anything I can about software engineering at Lambda School to one day develop the world's finest coconut checker application.",
        pictureURI: "AboutUs/profilesImages/thomas.jpg"
    }
]
let developerInfoContainer = document.querySelector(".developer-info");
DeveloperArray.forEach(dev => {
    new DeveloperProfile(developerInfoContainer, dev);
});
