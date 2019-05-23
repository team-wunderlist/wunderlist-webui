import NavComponent from './NavLocation.js'
import NavData from '../../dbs/nav.js'

export default class NavBar{
    constructor(element){
        this.head=element

        this.currentPage=window.location.pathname

        this.root=this.head.querySelector('nav')
        
        this.compContainer=document.createElement('section')
        this.compContainer.classList.add('navContainer','hide')
        this.root.appendChild(this.compContainer)

        this.components=NavData.paths.map(data=>new NavComponent(data,this.currentPage.slice(1)))
        this.components.forEach(comp=>this.compContainer.appendChild(comp.element))

        this.menuButton=document.createElement('section')
        this.menuButton.textContent='Menu'
        this.menuButton.classList.add('menuButton')
        this.root.prepend(this.menuButton)
        this.menuButton.addEventListener('click',(e)=>{
                this.toggleMenu()
        })

        this.wunderlist=document.createElement('section')
        this.wunderlist.classList.add('headerImg')
        this.navImg=document.createElement('img')
        this.navImg.setAttribute('src','/img/Wunderlist.png')
        this.wunderlist.appendChild(this.navImg)
        this.head.prepend(this.wunderlist)
    }

    toggleMenu(){
        this.compContainer.classList.toggle('hide')
    }
}