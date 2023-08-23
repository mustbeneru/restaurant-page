import initMenuPage from "./menuPage";
import '../dist/style.css'

const initHomePage = () => {

    const content = document.querySelector('#content')
    
    content.replaceChildren();

    const mainSection = document.createElement('section')
    mainSection.classList.add('main')
    content.appendChild(mainSection)

    const upperHero = document.createElement('div')
    const lowerHero = document.createElement('div')

    upperHero.classList.add('upperHero')
    lowerHero.classList.add('lowerHero')

    upperHero.textContent = 'Healthy Food Makes You Feel Good!'
    lowerHero.textContent = 'We Cook For Your Health And Happiness!'

    const menuButton = document.createElement('button')
    menuButton.classList.add('menuButton')
    menuButton.textContent = 'View Menu'

    menuButton.addEventListener('click', initMenuPage)

    mainSection.append(upperHero, lowerHero, menuButton)

}

export default initHomePage;