import Icon from './restaurant.jpg'
import './style.css'

export default function homePageLoad() {

    const navbar = document.createElement("ul");
    navbar.setAttribute("id", "navbar");

    const navbarHome = document.createElement("li");
    navbarHome.setAttribute("id", "home");
    navbarHome.textContent = "Home";
    navbarHome.classList.add("active");
    navbarHome.style.backgroundColor = '#22a0df';

    const navbarMenu = document.createElement("li");
    navbarMenu.setAttribute("id", "menu");
    navbarMenu.style.cursor = "pointer";
    navbarMenu.textContent = "Menu";

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
    textEl.classList.add("text");
    textEl.classList.add('home-text')
    textEl.textContent = "Welcome to Barron Lake Eatery, where culinary excellence meets lakeside charm. Nestled on the shores of the serene Barron Lake, our restaurant invites you to embark on a gastronomic journey that harmonizes flavors with breathtaking views. At Barron Lake Eatery, we take pride in offering a diverse menu that celebrates both local and international cuisines, curated with the finest, freshest ingredients. From mouthwatering seafood delicacies to hearty comfort foods, each dish is a masterpiece crafted by our skilled chefs. Our inviting ambiance, inspired by the natural beauty of the lake, provides the perfect backdrop for a memorable dining experience. Whether you're enjoying a romantic evening by the water, gathering with friends, or savoring a family meal, Barron Lake Eatery promises an unparalleled fusion of taste, atmosphere, and hospitality. Come join us, and let Barron Lake Eatery be your destination for exceptional dining moments by the lake.";

    const restaurantImage = new Image();
    restaurantImage.src = Icon
    restaurantImage.classList.add('centered-image');
    restaurantImage.width = (60 * window.innerWidth) / 100;


    const div = document.createElement("div");

    div.appendChild(navbar);
    div.appendChild(headerEl);
    div.appendChild(textEl);
    div.appendChild(restaurantImage)

    return div;
}