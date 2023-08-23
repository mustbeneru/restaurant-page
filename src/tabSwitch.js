import initHomePage from "./homePage";
import initMenuPage from "./menuPage";
import initAboutPage from "./aboutPage";

const switchTab = () => {

    const home = document.querySelector('.home')
    const menu = document.querySelector('.menu');
    const about = document.querySelector('.about'); 

    home.addEventListener('click', initHomePage)
    menu.addEventListener('click', initMenuPage)    
    about.addEventListener('click', initAboutPage)

}

export default switchTab;