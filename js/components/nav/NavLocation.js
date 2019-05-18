export default class NavLocation{
    constructor(comp,location){
        this.comp=comp
        this.destination=comp.destination
        this.text=comp.text

        this.location=location.slice(0,-5);
        this.element=document.createElement('section')
        this.anchor=document.createElement('a')
        
        if(this.location==this.destination)
            this.element.classList.add('current')
        
        this.anchor.textContent=this.text
        
            this.anchor.setAttribute('href',`/${this.destination.join('/')}.html`)
        this.element.appendChild(this.anchor)

    }
}