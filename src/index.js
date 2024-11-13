import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadReservation } from "./reservation.js";

const content = document.querySelector('#content');
const tabs = document.querySelector('header > nav');

tabs.addEventListener('click', e => {
    if(!e.target.id) return;
    content.textContent = "";
    
    if(e.target.id === "home") { 
        loadHome();
        return;    
    }

    if(e.target.id === "menu") { 
        loadMenu();
        return;    
    }

    if(e.target.id === "reservation") { 
        loadReservation();
        return;    
    }

});

loadHome();

console.log("Script runnig");