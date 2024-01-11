import './style.css';

import homePageLoad from "./homePageLoad";
import menuPageLoad from './menuPageLoad';
import contactPageLoad from './contactPageLoad';

function load(page) {
    document.body.innerHTML = "";
    document.body.appendChild(page);

    const navbarHome = document.getElementById("home");
    navbarHome.addEventListener('click', (e) => {
        e.preventDefault();
        load(homePageLoad());
        
    });

    const navbarMenu = document.getElementById("menu");
    navbarMenu.addEventListener('click', (e) => {
        e.preventDefault();
        load(menuPageLoad()); 
    });

    const navbarContact = document.getElementById("contact");
    navbarContact.addEventListener('click', (e) => {
        e.preventDefault();
        load(contactPageLoad());
    });
}

load(homePageLoad());