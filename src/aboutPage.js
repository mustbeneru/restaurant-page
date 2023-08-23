import SVG1 from './svgs/location.svg'
import SVG2 from './svgs/schedule.svg'
import SVG3 from './svgs/phone.svg'

const initAboutPage = () => {

    const content = document.querySelector('#content')

    content.replaceChildren();

    const aboutSection = document.createElement('section')
    aboutSection.classList.add('aboutSection')
    content.appendChild(aboutSection)

    const aboutHeader = document.createElement('header')
    aboutHeader.classList.add('aboutHeader');
    aboutHeader.textContent = 'Contact Us'

    const aboutContainer = document.createElement('div')
    aboutContainer.classList.add('aboutContainer');
    
    const details = document.createElement('div')
    details.classList.add('details')
    
    const addressSVG = new Image();
    addressSVG.classList.add('svg');
    addressSVG.src = SVG1;

    const addressText = document.createElement('para');
    addressText.classList.add('aboutDetails')
    addressText.textContent = '123 Malolos, Bulacan'

    const address = document.createElement('para');
    address.classList.add('info')
    address.append(addressSVG, addressText)

    const hoursText = document.createElement('para');
    hoursText.classList.add('aboutDetails')
    hoursText.textContent = 'Mon - Sat | 8am - 8pm'

    const hoursSVG = new Image();
    hoursSVG.classList.add('svg')
    hoursSVG.src = SVG2;

    const hours = document.createElement('para');
    hours.classList.add('info')
    hours.append(hoursSVG, hoursText)

    const phoneText = document.createElement('para');
    phoneText.classList.add('aboutDetails')
    phoneText.textContent = '(123)-456 7890'

    const phoneSVG = new Image();
    phoneSVG.classList.add('svg');
    phoneSVG.src = SVG3;

    const phone = document.createElement('para');
    phone.classList.add('info')
    phone.append(phoneSVG, phoneText)

    const message = document.createElement('para');
    message.classList.add('aboutDetails')
    message.textContent = 'Send us a message!'

    const input = document.createElement('div')
    input.classList.add('input');

    const inputName = document.createElement('input')
    inputName.classList.add('inputName');
    inputName.placeholder = 'Full Name'
    
    const inputEmail = document.createElement('input')
    inputEmail.classList.add('inputEmail');
    inputEmail.placeholder = 'Email Address'

    const inputMessage = document.createElement('input')
    inputMessage.classList.add('inputMessage');
    inputMessage.placeholder = 'Type your message...'
    
    const location = document.createElement('iframe')
    location.classList.add('location')
    location.width = 600;
    location.height = 500;
    location.src = 'https://maps.google.com/maps?q=malolos bulacan&t=&z=10&ie=UTF8&iwloc=&output=embed'

    details.append(address, hours, phone, message, input)
    aboutContainer.append(details, location)
    input.append(inputName, inputEmail, inputMessage)
    aboutSection.append(aboutHeader, aboutContainer)
}

export default initAboutPage;