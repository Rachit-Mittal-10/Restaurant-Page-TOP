import "./home.css";


const homePage = () => {
    const homePageDiv = document.createElement("div");
    homePageDiv.className = "home-page-div";
    
    const titleDiv = document.createElement("div");
    titleDiv.className = "title-div";
    titleDiv.innerHTML = "<p style=\"font-size: 48px;\">Sedtech's Biryani</p>";

    const addressDiv = document.createElement("div");
    addressDiv.className = "address-div";
    addressDiv.innerHTML = "<p>Add: H-98 Delhi</p>";
    
    const timingInfoDiv = document.createElement("div");
    timingInfoDiv.className = "timing-info-div";
    timingInfoDiv.innerHTML = "<p>Timings: 9AM to 7PM</p><br><p>Open From Monday to Friday.</p>";

    homePageDiv.appendChild(titleDiv);
    homePageDiv.appendChild(addressDiv);
    homePageDiv.appendChild(timingInfoDiv);
    document.getElementById("content").appendChild(homePageDiv);
}

export default homePage;