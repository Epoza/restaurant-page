import './style.css'
import fishAndChips from './fish-and-chips.jpg'
import catfish from './catfish.jpg'
import fishTacos from './fish-tacos.jpg'

export default function menuPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.style.cursor = "pointer";
    navbarHome.textContent = "Home";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.classList.add("active");
    navbarMenu.textContent = "Menu";
    navbarMenu.style.backgroundColor = '#22a0df';

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.style.cursor = "pointer";
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarHome);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Menu";

    const menuItemContainer = document.createElement("div");
    menuItemContainer.setAttribute("id", "meals");

    // Menu item 1
    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("meal");
    const menuItem1Title = document.createElement("h4");
    menuItem1Title.classList.add("mealTitle");
    menuItem1Title.textContent = "Fish & Chips";
    const menuItem1Description = document.createElement("p");
    menuItem1Description.classList.add("mealDescription");
    menuItem1Description.textContent = "crispy golden fillets of the freshest catch paired with hand-cut, double-cooked chips."

    const mealImage1 = new Image();
    mealImage1.src = fishAndChips
    mealImage1.classList.add('meal-image');

    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Description);
    menuItem1.appendChild(mealImage1);

    // Menu item 2

    const menuItem2 = document.createElement("div");
    menuItem2.classList.add("meal");
    const menuItem2Title = document.createElement("h4");
    menuItem2Title.classList.add("mealTitle");
    menuItem2Title.textContent = "Fried Catfish";
    const menuItem2Description = document.createElement("p");
    menuItem2Description.classList.add("mealDescription");
    menuItem2Description.textContent = "Deepfried catfish fillets, delicately seasoned and served with a side coleslaw."

    const mealImage2 = new Image();
    mealImage2.src = catfish
    mealImage2.classList.add('meal-image');

    menuItem2.appendChild(menuItem2Title);
    menuItem2.appendChild(menuItem2Description);
    menuItem2.appendChild(mealImage2);

    // Menu item 3

    const menuItem3 = document.createElement("div");
    menuItem3.classList.add("meal");
    const menuItem3Title = document.createElement("h4");
    menuItem3Title.classList.add("mealTitle");
    menuItem3Title.textContent = "Fish tacos";
    const menuItem3Description = document.createElement("p");
    menuItem3Description.classList.add("mealDescription");
    menuItem3Description.textContent = "One of our fan favorites, a mix of all our lake fish blended into two tacos, enjoy!"

    const mealImage3 = new Image();
    mealImage3.src = fishTacos
    mealImage3.classList.add('meal-image');

    menuItem3.appendChild(menuItem3Title);
    menuItem3.appendChild(menuItem3Description);
    menuItem3.appendChild(mealImage3);


    menuItemContainer.appendChild(menuItem1);
    menuItemContainer.appendChild(menuItem2);
    menuItemContainer.appendChild(menuItem3);

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(menuItemContainer);

    return div;
}