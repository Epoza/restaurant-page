export default function menuPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "home");
    navbarInfo.style.cursor = "pointer";
    navbarInfo.textContent = "Info";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.classList.add("active");
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.style.cursor = "pointer";
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarInfo);
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

    //Menu item 1
    const menuItem1 = document.createElement("div");
    menuItem1.classList.add("meal");
    const menuItem1Title = document.createElement("h4");
    menuItem1Title.classList.add("mealTitle");
    menuItem1Title.textContent = "Fish & Chips";
    const menuItem1Description = document.createElement("p");
    menuItem1Description.classList.add("mealDescription");
    menuItem1Description.textContent = "crispy golden fillets of the freshest catch paired with hand-cut, double-cooked chips."

    menuItem1.appendChild(menuItem1Title);
    menuItem1.appendChild(menuItem1Description);

    //add more menu items 2

    menuItemContainer.appendChild(menuItem1);

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(menuItemContainer);

    return div;
}