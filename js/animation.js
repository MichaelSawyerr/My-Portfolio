 // Define DOM elements
 


    const heroImage = document.querySelector("#hero__animation__img");

  const tl = document.querySelector("#grid_tl");
  const tr = document.querySelector("#grid_tr");
 const bl = document.querySelector("#grid_bl");
 const br = document.querySelector("#grid_br");

  const tlbtn = document.querySelector("#grid_tl_btn");
  const trbtn = document.querySelector("#grid_tr_btn");
 const blbtn = document.querySelector("#grid_bl_btn");
 const brbtn = document.querySelector("#grid_br_btn");
 
 const tlContent = document.querySelector("#grid_tl_content");
 const trContent = document.querySelector("#grid_tr_content");
 const blContent = document.querySelector("#grid_bl_content");
 const brContent = document.querySelector("#grid_br_content");

 const projectOne = document.querySelector(".p-1");
 const projectTwo = document.querySelector(".p-2");
 const projectThree = document.querySelector(".p-3");

 // Define colors and positions
const bgColor = "var(--bg)";
const bgColorAlt = "var(--bg-alt)";
const textColor = "var(--text)";
const textColorAlt = "var(--text-alt)";

let tlActive = "translateX(5vw) translateY(0)";
let tlHidden = "translateX(-100vw) translateY(-100vh)";

let trActive = "translateX(-5vw) translateY(0)";
let trHidden = "translateX(100vw) translateY(-100vh)";

let blActive = "translateX(10vw) translateY(7vh)";
let blHidden = "translateX(-100vw) translateY(100vh)";

let brActive = "translateX(-5vw) translateY(0)";
let brHidden = "translateX(100vw) translateY(100vh)";

//Define the corner that is open
let activeCorner = "";

//Add an event listener to the window object to listen for resize events
 window.addEventListener("resize", handleWindowResize);

//Function that handles the styling when resizing window
 function handleWindowResize() {
    switch (activeCorner) {
        case "top-left":
            if (window.innerWidth <= 1100) {
              tlActive = "translateX(0) translateY(0)";
              tlContent.style.transform = "translateX(0vw) translateY(0)";
              tlContent.style.width = "100vw";
              tlContent.style.height = "100vh";
              tlContent.style.top = "0";
              tlContent.style.display = "flex";
              tlContent.style.alignItems = "center";
              tlContent.style.justifyContent = "center";
              tlContent.style.background = "var(--bg-transparent)";
              tlContent.style.zIndex = "200";
              tlbtn.style.zIndex = "300";
              trbtn.style.zIndex = "100";
              blbtn.style.zIndex = "100";
              brbtn.style.zIndex = "100";
            } else {
              tlActive = "translateX(5vw) translateY(0)";
              tlContent.style.transform = "translateX(5vw) translateY(0)";
              tlContent.style.width = "30vw";
              tlContent.style.height = "0";
              tlContent.style.top = "10vh";
              tlContent.style.display = "block";
            }
            break;

        case "top-right":
            if (window.innerWidth <= 1100) {
                trActive = "translateX(0) translateY(0)";
                trContent.style.transform = "translateX(0vw) translateY(0)";
                trContent.style.width = "100vw";
                trContent.style.height = "100vh";
                trContent.style.top = "0";
                trContent.style.display = "flex";
                trContent.style.alignItems = "center";
                trContent.style.justifyContent = "center";
                trContent.style.background = "var(--bg-transparent)";
                trContent.style.zIndex = "200";
                trbtn.style.zIndex = "300";
                tlbtn.style.zIndex = "100";
                blbtn.style.zIndex = "100";
                brbtn.style.zIndex = "100";
              } else {
                trActive = "translateX(-5vw) translateY(0)";
                trContent.style.transform = "translateX(-5vw) translateY(0)";
                trContent.style.width = "30vw";
                trContent.style.height = "0";
                trContent.style.top = "10vh";
                trContent.style.display = "block";
              }
        break;   
        case "bottom-left":
            if (window.innerWidth <= 600) {
                blActive = "translateX(0) translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width = "100vw";
                blContent.style.height = "100vh";
                blContent.style.top = "0";
                blContent.style.display = "flex";
                blContent.style.alignItems = "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                trbtn.style.zIndex = "100";
                tlbtn.style.zIndex = "100";
                blbtn.style.zIndex = "300";
                brbtn.style.zIndex = "100";
                projectOne.style.width = "70%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "70%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "70%";
                projectThree.style.margin = "auto auto 0.5rem";
              } else if (window.innerWidth <= 1100) {
                blActive = "translateX(0) translateY(0)";
                blContent.style.transform = "translateX(0vw) translateY(0)";
                blContent.style.width = "100vw";
                blContent.style.height = "100vh";
                blContent.style.top = "0";
                blContent.style.display = "flex";
                blContent.style.alignItems = "center";
                blContent.style.justifyContent = "center";
                blContent.style.background = "var(--bg-transparent)";
                blContent.style.zIndex = "200";
                trbtn.style.zIndex = "100";
                tlbtn.style.zIndex = "100";
                blbtn.style.zIndex = "300";
                brbtn.style.zIndex = "100";
                projectOne.style.width = "40%";
                projectOne.style.margin = "auto auto 0.5rem";
                projectTwo.style.width = "40%";
                projectTwo.style.margin = "auto auto 0.5rem";
                projectThree.style.width = "40%";
                projectThree.style.margin = "auto auto 0.5rem";
              } else {
                blActive = "translateX(10vw) translateY(7vh)";
                blContent.style.transform = "translateX(10vw) translateY(7vh)";
                blContent.style.width = "15rem";
                blContent.style.height = "0";
                blContent.style.top = "40vh";
                blContent.style.display = "block";
                projectOne.style.width = "100%";
                projectTwo.style.width = "100%";
                // projectThree.style.width = "100%";
              }
              break;
        case "bottom-right":
            if (window.innerWidth <= 1100) {
                brActive = "translateX(0) translateY(0)";
                brContent.style.transform = "translateX(0vw) translateY(0)";
                brContent.style.width = "100vw";
                brContent.style.height = "100vh";
                brContent.style.bottom = "0";
                brContent.style.display = "flex";
                brContent.style.flexDirection = "column";
                brContent.style.alignItems = "center";
                brContent.style.justifyContent = "center";
                brContent.style.background = "var(--bg-transparent)";
                brContent.style.zIndex = "200";
                trbtn.style.zIndex = "100";
                tlbtn.style.zIndex = "100";
                blbtn.style.zIndex = "100";
                brbtn.style.zIndex = "300";
              } else {
                brActive = "translateX(-5vw) translateY(0)";
                brContent.style.transform = "translateX(-5vw) translateY(0)";
                brContent.style.width = "30vw";
                brContent.style.height = "0";
                brContent.style.bottom = "30vh";
                brContent.style.display = "block";
              }

        break;
        default:
    }

}

// Store last reverse animation

let lastReverseAnimation = ""; //which animation are we gonna play next that we are gonna store

//Play animation function

function playAnimation(animation, reverseAnimation){
    //remove all the animation classes from heroImage
    heroImage.className = "";
    

if(lastReverseAnimation !== ""){
   
    //clicked something
    heroImage.classList.add(lastReverseAnimation);
    setTimeout(function (){
        heroImage.classList.remove(lastReverseAnimation)
        heroImage.classList.add(animation);
        lastReverseAnimation = reverseAnimation;
    }, 200);

    
} else {
    heroImage.classList.add(animation);
    lastReverseAnimation = reverseAnimation;
  

}

}

 function playClosingAnimation(reverseAnimation){
    tlbtn.innerHTML = "About"
    trbtn.innerHTML = "Experience"
    blbtn.innerHTML = "Projects"
    brbtn.innerHTML = "Contact"
    
    switch (activeCorner) {
        case "top-left":
            tlbtn.style.background = bgColor;
            tlbtn.style.color = textColor;
            tlContent.style.transform= tlHidden;
            break;
        case "top-right":
            trbtn.style.background = bgColor;
            trbtn.style.color = textColor;
            trContent.style.transform= trHidden;
            break;
        case "bottom-left":
            blbtn.style.background = bgColor;
            blbtn.style.color = textColor;
            blContent.style.transform= blHidden;
            break;
        case "bottom-right":
            brbtn.style.background = bgColor;
            brbtn.style.color = textColor;
            brContent.style.transform= brHidden;
            break;

            default:
    }

    heroImage.className = "";
    lastReverseAnimation = "";
    activeCorner = "";
    heroImage.classList.add(reverseAnimation);
    setTimeout(function() {
        heroImage.classList.remove(reverseAnimation);
    }, 200);

}

//Onclick corner button functions
tlbtn.onclick = function (){
    if (activeCorner === "top-left") {
         playClosingAnimation("reverse-animate-top-left");
    } else {
        trbtn.innerHTML = "Experience";
        blbtn.innerHTML = "Projects";
        brbtn.innerHTML = "Contact";
        
        activeCorner = "top-left";
        tlbtn.innerHTML = "&uarr;<br/>About"; //Set the HTML of the top left button

        handleWindowResize(); 
        playAnimation("animate-top-left", "reverse-animate-top-left"); //classes that we will build in the style
        //Change background colors
        trbtn.style.background = bgColor;
        brbtn.style.background = bgColor;
        blbtn.style.background = bgColor;
        tlbtn.style.background = bgColorAlt;

        //Change text colors

        trbtn.style.color = textColor;
        brbtn.style.color = textColor;
        blbtn.style.color = textColor;
        tlbtn.style.color = textColorAlt;

        //Change positions of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlActive;
    }


};

trbtn.onclick = function (){
    if (activeCorner === "top-right") {
        playClosingAnimation("reverse-animate-top-right");
    } else {
        //if not active the arrow will be removed
        tlbtn.innerHTML = "about";
        blbtn.innerHTML = "Projects";
        brbtn.innerHTML = "Contact";

        activeCorner = "top-right";
        trbtn.innerHTML = "&uarr;<br/>Experience"; //Set the HTML of the top left button

        handleWindowResize(); 
        playAnimation("animate-top-right", "reverse-animate-top-right"); //classes that we will build in the style
        //Change background colors
        trbtn.style.background = bgColorAlt;
        brbtn.style.background = bgColor;
        blbtn.style.background = bgColor;
        tlbtn.style.background = bgColor;

        //Change text colors

        trbtn.style.color = textColorAlt;
        brbtn.style.color = textColor;
        blbtn.style.color = textColor;
        tlbtn.style.color = textColor;

        //Change positions of corner content
        trContent.style.transform = trActive;
        brContent.style.transform = brHidden;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }


};

blbtn.onclick = function (){
    if (activeCorner === "bottom-left") {
        playClosingAnimation("reverse-animate-bottom-left");
      } else {
        tlbtn.innerHTML = "About";
        trbtn.innerHTML = "Experience";
        brbtn.innerHTML = "Contact";
    
        // Setting activeCorner
        activeCorner = "bottom-left";
        blbtn.innerHTML = "Projects<br/>&darr;";
    
        handleWindowResize();
        playAnimation("animate-bottom-left", "reverse-animate-bottom-left");
    
        // Change background colors
        trbtn.style.background = bgColor;
        brbtn.style.background = bgColor;
        blbtn.style.background = bgColorAlt;
        tlbtn.style.background = bgColor;
    
        // Change text colors
        trbtn.style.color = textColor;
        brbtn.style.color = textColor;
        blbtn.style.color = textColorAlt;
        tlbtn.style.color = textColor;
    
        // Change positions of the corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brHidden;
        blContent.style.transform = blActive;
        tlContent.style.transform = tlHidden;
    }
};

brbtn.onclick = function (){
    if (activeCorner === "bottom-right") {
        playClosingAnimation("reverse-animate-bottom-right");
    } else {
        //if not active the arrow will be removed
        tlbtn.innerHTML = "about";
        trbtn.innerHTML = "Experience";
        blbtn.innerHTML = "Projects";

        activeCorner = "bottom-right";
        brbtn.innerHTML = "Contact<br/>&darr;"; //Set the HTML of the top left button

        handleWindowResize(); 
        playAnimation("animate-bottom-right", "reverse-animate-bottom-right"); //classes that we will build in the style
        //Change background colors
        trbtn.style.background = bgColor;
        brbtn.style.background = bgColorAlt;
        blbtn.style.background = bgColor;
        tlbtn.style.background = bgColor;

        //Change text colors

        trbtn.style.color = textColor;
        brbtn.style.color = textColorAlt;
        blbtn.style.color = textColor;
        tlbtn.style.color = textColor;

        //Change positions of corner content
        trContent.style.transform = trHidden;
        brContent.style.transform = brActive;
        blContent.style.transform = blHidden;
        tlContent.style.transform = tlHidden;
    }
};

