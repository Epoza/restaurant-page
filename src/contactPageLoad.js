export default function contactPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarInfo = document.createElement("li");
    navbarInfo.setAttribute("id", "home");
    navbarInfo.style.cursor = "pointer";
    navbarInfo.textContent = "Info";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.classList.add("active");
    navbarContact.textContent = "Contact";

    navbar.appendChild(navbarInfo);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Contact";

    const contactLocationEl = document.createElement("p");
    contactLocationEl.classList.add("text");
    contactLocationEl.textContent = "Located at: 567 Barron Dr, Serenity Springs, Rhode Island";

    const contactEmailEl = document.createElement("p");
    contactEmailEl.classList.add("text");
    contactEmailEl.textContent = "fakeEmail@email.com";

    const contactPhoneEl = document.createElement("p");
    contactPhoneEl.classList.add("text");
    contactPhoneEl.textContent = "583-629-5542";

    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(contactLocationEl);
    div.appendChild(contactEmailEl);
    div.appendChild(contactPhoneEl);

    return div;
}