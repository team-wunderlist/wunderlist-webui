import NavBar from './components/nav/NavBar.js'
import Footer from './components/Footer/footer.js'

const navbar=new NavBar(document.querySelector('header'))
const footer=new Footer(document.querySelector('footer'))

function demoTheme(theme){
    document.querySelectorAll('link[rel="stylesheet"]')[1].setAttribute('href',`/css/${theme}.css`)
}