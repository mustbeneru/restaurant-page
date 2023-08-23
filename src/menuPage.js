import tofuStirFry from './images/tofu-stir-fry.jpg'
import cheesesteakLettuce from './images/cheesesteak-lettuce.jpg'
import goddessBowls from './images/goddess-bowls.jpg'
import turkeyBurgers from './images/turkey-burgers.jpg'
import crustedSalmon from './images/crusted-salmon.jpg'
import zucchini from './images/zucchini.jpg'
import '../dist/style.css'


const initMenuPage = () => {

    const content = document.querySelector('#content')

    content.replaceChildren();

    const menuSection = document.createElement('section')
    menuSection.classList.add('menuSection')
    content.appendChild(menuSection)

    const menuHeader = document.createElement('header')
    menuHeader.classList.add('menuHeader');
    menuHeader.textContent = 'Menu';

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menuContainer');

    const menuItem1 = document.createElement('div');
    const headerItem1 = document.createElement('div');
    const descriptionItem1 = document.createElement('div')
    
    menuItem1.classList.add('menuItem')
    headerItem1.classList.add('itemHeader')
    descriptionItem1.classList.add('descriptionItem')

    const imgItem1 = new Image();
    imgItem1.src = tofuStirFry;
    imgItem1.width = 250;
    imgItem1.height = 250;
    headerItem1.textContent = 'Tofu Stir-Fry'
    descriptionItem1.textContent = 'Packed with gourmet flavors, it\’s deeply savory, a little spicy, and perfectly saucy. Easy to customize with your favorite vegetables!'
    menuItem1.append(headerItem1,imgItem1, descriptionItem1);

    const menuItem2 = document.createElement('div');
    const headerItem2 = document.createElement('div');
    const descriptionItem2 = document.createElement('div')
    
    menuItem2.classList.add('menuItem')
    headerItem2.classList.add('itemHeader')
    descriptionItem2.classList.add('descriptionItem')

    const imgItem2 = new Image();
    imgItem2.src = cheesesteakLettuce;
    imgItem2.width = 250;
    imgItem2.height = 250;
    headerItem2.textContent = 'Philly Cheesesteak Lettuce Wraps    '
    descriptionItem2.textContent = 'Filled with sizzling beef, veggies, and cheese, this quick low-carb meal has less than 4 net carbs!'
    menuItem2.append(headerItem2,imgItem2, descriptionItem2);

    const menuItem3 = document.createElement('div');
    const headerItem3 = document.createElement('div');
    const descriptionItem3 = document.createElement('div')
    
    menuItem3.classList.add('menuItem')
    headerItem3.classList.add('itemHeader')
    descriptionItem3.classList.add('descriptionItem')

    const imgItem3 = new Image()
    imgItem3.src = goddessBowls;
    imgItem3.width = 250;
    imgItem3.height = 250;
    headerItem3.textContent = 'Goddess Bowls'
    descriptionItem3.textContent = 'A good sauce changes everything, and this green goddess dressing is one of our favorites yet.'
    menuItem3.append(headerItem3, imgItem3, descriptionItem3);

    const menuItem4 = document.createElement('div');
    const headerItem4 = document.createElement('div');
    const descriptionItem4 = document.createElement('div')
    
    menuItem4.classList.add('menuItem');
    headerItem4.classList.add('itemHeader');
    descriptionItem4.classList.add('descriptionItem');

    const imgItem4 = new Image();
    imgItem4.src = turkeyBurgers;
    imgItem4.width = 250;
    imgItem4.height = 250;
    headerItem4.textContent = 'Turkey Burgers'
    descriptionItem4.textContent = 'Instead of trying to make it into something it’s not, we embraced the flavors of the turkey instead of trying to cover them up.'
    menuItem4.append(headerItem4, imgItem4, descriptionItem4);
    
    const menuItem5 = document.createElement('div');
    const headerItem5 = document.createElement('div');
    const descriptionItem5 = document.createElement('div')
    
    menuItem5.classList.add('menuItem')
    headerItem5.classList.add('itemHeader')
    descriptionItem5.classList.add('descriptionItem')

    const imgItem5 = new Image();
    imgItem5.src = crustedSalmon;
    imgItem5.width = 250;
    imgItem5.height = 250;
    headerItem5.textContent = 'Everything Bagel Crusted Salmon'
    descriptionItem5.textContent = 'A fluffy, chewy, everything bagel topped with cream cheese, smoked salmon, and all the fixin’s is my idea of a solid brunch.'
    menuItem5.append(headerItem5, imgItem5, descriptionItem5);
    
    const menuItem6 = document.createElement('div');
    const headerItem6 = document.createElement('div');
    const descriptionItem6 = document.createElement('div')
    
    menuItem6.classList.add('menuItem')
    headerItem6.classList.add('itemHeader')
    descriptionItem6.classList.add('descriptionItem')
   
    const imgItem6 = new Image();
    imgItem6.src = zucchini;
    imgItem6.width = 250;
    imgItem6.height = 250;
    headerItem6.textContent = 'Turkey Zucchini Enchilada Casserole'
    descriptionItem6.textContent = 'This Zucchini Enchilada Casserole recipe is stacked (instead of rolled) up with layers of sliced zucchini and your favorite enchilada ingredients. Feel free to add meat or make this casserole vegetarian.'
    menuItem6.append(headerItem6, imgItem6, descriptionItem6);
    
    menuContainer.append(menuItem1, menuItem2, menuItem3, menuItem4, menuItem5,
                         menuItem6);

    menuSection.append(menuHeader, menuContainer);

}

export default initMenuPage;