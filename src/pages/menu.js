import "./menu.css";

const menuPage = ()=>{
    const menuDiv = document.createElement("div");
    menuDiv.className = "menu-div";
    menuDiv.innerHTML = `
    <p>Chicken Biryani........Rs140</p>
    <p>Mutton Biryani..........Rs160</p>
    <p>veg Biryani.............Rs 80</p>
    `;
    document.getElementById("content").appendChild(menuDiv);
};

export default menuPage;