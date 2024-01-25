//Define DOM elements: creating new element thats refering existing elements
document.addEventListener('DOMContentLoaded', (event) => {
const toggleButton = document.querySelector("#toggle-button");// looks through the html code and find what is being referenced
const root = document.querySelector(":root");
const storageKey = "color-mode";
const defaultMode = "light-mode";

// load the users preffered color mode from local storage

function loadColorMode(){ //loading colormode thats in user browser
const colorMode = localStorage.getItem(storageKey);
root.classList.add(colorMode || defaultMode);
updateToggleButton();
}

loadColorMode();

// Toggle the color mode
toggleButton.addEventListener("click", () => {
    console.log("test");
    saveColorMode(); //only run when we click button

}); //listens to the page for a click

//saving the user's prefered color mode to local storage
function saveColorMode() {
    //Chck if the root element has a class of "dark-mode". If yes
    //then its switched to light mode.
    const currentMode = root.classList.contains("dark-mode")
     ? "light-mode"
     : "dark-mode";
root.classList.remove("light.mode", "dark-mode");//removing existing modes
root.classList.add(currentMode);
localStorage.setItem(storageKey, currentMode);
updateToggleButton();
}

function updateToggleButton(){
    if (root.classList.contains("dark-mode")) { //if root has dark mode, the toggle should have image of moon
        toggleButton.style.backgroundImage = "var(--moon)";
    } else { // it should have variable of sun.
        toggleButton.style.backgroundImage = "var(--sun)";

    }

}

});
