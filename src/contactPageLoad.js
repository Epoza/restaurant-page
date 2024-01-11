export default function contactPageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.style.cursor = "pointer";
    navbarHome.textContent = "Home";

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

    const navbarContact = document.createElement("li");
    navbarContact.setAttribute("id", "contact");
    navbarContact.classList.add("active");
    navbarContact.textContent = "Contact";
    navbarContact.style.backgroundColor = '#22a0df'

    navbar.appendChild(navbarHome);
    navbar.appendChild(navbarMenu);
    navbar.appendChild(navbarContact);


    const headerEl = document.createElement("h1");
    headerEl.classList.add("title");
    headerEl.textContent = "Barron Lake Eatery";

    const textEl = document.createElement("p");
    textEl.classList.add("subtitle");
    textEl.textContent = "Contact";

    const contactContainerEl = document.createElement("div");
    contactContainerEl.classList.add("contact-container")

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

    contactContainerEl.appendChild(contactLocationEl);
    contactContainerEl.appendChild(contactEmailEl);
    contactContainerEl.appendChild(contactPhoneEl);
    
    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(contactContainerEl);

    return div;
}