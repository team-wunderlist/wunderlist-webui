class NavComp{
    constructor(text,...dest){
        this.destination=dest
        this.text=text
    }
}

export default {
    paths:[
        new NavComp('Home','index'),
        new NavComp('About Us', 'about'),
        new NavComp('Sign Up Login', 'signup'),
        new NavComp('Contact Us!','contact')
    ],
    image:'/img/navImg.png'
}
