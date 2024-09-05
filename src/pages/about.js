import "./about.css";

const aboutPage = () => {
    const aboutDiv = document.createElement("div");
    aboutDiv.className = "about-div";

    aboutDiv.innerHTML = `
    <p style="font-size:32px;">About Us</p>
    <p>Sedtech's Biryani has been operating in India sice 1800s, delivering high quality Biryani across the India. We had 100+ outlets over the India catering to needs of Indians. </p>
    `;
    document.getElementById("content").appendChild(aboutDiv);
};

export default aboutPage;