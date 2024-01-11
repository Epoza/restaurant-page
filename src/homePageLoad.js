export default function homePageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "home");
    navbarInfo.textContent = "Info";
    navbarInfo.classList.add("active");

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
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
    textEl.classList.add("text");
    textEl.textContent = "Enjoy a tranquil meal by the East Barron Lake. With fresh caught fish and daily specials, stop by today and let us serve you with a fresh meal!";

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);

    return div;
}