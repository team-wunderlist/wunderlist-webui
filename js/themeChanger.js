import Themes from './dbs/ThemeData.js'

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
            this.themes=Themes;
            this.themes.forEach(theme=>{
                let themeTag=document.createElement('label'),
                    themeInput=document.createElement('input')

                themeInput.setAttribute('type','radio')
                themeInput.setAttribute('name',theme.name)

                if (themeInput.name==this.stored.theme) {
                    themeInput.checked=true
                    this.current=themeInput
                }

                themeTag.textContent=`: ${theme.title}`
                themeTag.prepend(themeInput)
                this.root.appendChild(themeTag)
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