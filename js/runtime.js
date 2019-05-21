import NavBar from './components/nav/NavBar.js'
import Footer from './components/Footer/footer.js'
import Theme from './themeChanger.js'

const navbar=new NavBar(document.querySelector('header'))
const footer=new Footer(document.querySelector('footer'))
const theme=new Theme(document.querySelectorAll('link[rel="stylesheet"]')[1], document.querySelector('form'))