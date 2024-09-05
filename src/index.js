// alert("Index.js is working");
import "./style.css";
import homePage from "./pages/home.js";
import aboutPage from './pages/about.js';
import menuPage from "./pages/menu.js";
console.log("Index.js is working");

const HomeButton = document.getElementById("home-button");
const MenuButton = document.getElementById("menu-button");
const AboutButton = document.getElementById("about-button");

function clearContent(){
    document.getElementById("content").innerHTML = "";
};

HomeButton.addEventListener("click", ()=>{
    clearContent();
    homePage();
});

MenuButton.addEventListener("click",()=>{
    clearContent();
    menuPage();
});

AboutButton.addEventListener("click",()=>{
    clearContent();
    aboutPage();
});

homePage();