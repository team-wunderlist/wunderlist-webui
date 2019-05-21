export default class Themer{
    constructor(stylesheet, root=null){
        this.element=stylesheet
        this.root=root
        this.stored=window.localStorage

        if(this.stored.theme==undefined || this.stored.theme=='default')
            this.stored.theme='index'
        this.current=this.stored.theme
        
        this.element.setAttribute('href',`/css/${this.stored.theme}.css`)
        console.log(this.stored.theme);
        if(this.root){
            this.available=this.root.querySelectorAll('input')
            this.available.forEach(item=>{
                if (item.name==this.stored.theme) {
                    item.checked=true
                    this.current=item
                }
            })
            this.root.addEventListener('change',(e)=>{
                    this.attach(e)
            })
        }
    }
    attach(e){
        this.current.checked=false
        e.target.checked=true
        this.current=e.target
        this.stored.theme=e.target.name
        this.element.setAttribute('href',`/css/${this.stored.theme}.css`)
    }
}