let Counter = true;

function ToggleCSS () {
    let head = document.querySelector("head");
    
    link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://pinkulani.com/Stylesheets/Test.css";
    
    head.appendChild(link);
    
    Counter = !Counter;
}
