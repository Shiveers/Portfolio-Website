//morph animation text
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Hello",
    "Hola",
    "今日は",
    "नमस्ते",
    "你好",
    "안녕"
];

const morphTime = 1;
const cooldownTime = 0.3;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


// disable scroll upto 150 disable / enable scroll
function disableScroll(scrollTop, scrollLeft){
    window.onscroll = function() {
        window.scrollTo(scrollTop, scrollLeft);
    };
}

function enableScroll() {
    window.onscroll = function() {};
}
 
function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= viewportHeight &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  const element = document.getElementById("vp-1");

  if (isElementInView(element)) {
    console.log("Element is in view!");
  } else {
    console.log("Element is not in view.");
  }

//scroll button functionality

const button = document.getElementById("scroll-vp-12-btn");
const vp1 = document.getElementById("vp-1");

button.addEventListener("click", () => {
  const animation = vp1.animate([
    { transform: ` scale(1, 1)` },
    { transform: ` scale(${85 / 100}, ${90 / 100})` },
  ], {
    duration: 600, // Animation duration in milliseconds (optional)
    fill: "forwards", // Keep the final state after animation (optional)
    easing: "ease-in-out",
  });
});

const scrollButton_vp_12 = document.getElementById('scroll-vp-12-btn');

scrollButton_vp_12.addEventListener('click', () => {
    enableScroll();
    setTimeout(() => {
        const targetElement = document.getElementById('text-vp-2');
        targetElement.scrollIntoView({ behavior: "smooth" });
    }, 700);
});

//default function calls
const posTop = document.documentElement.scrollTop;
const posLeft =  document.documentElement.scrollLeft;
//disableScroll(posTop, posLeft);


let skillCur = 1;
let skillDisplay = document.getElementById("skl-display");

let hoveredElement = null;

document.addEventListener("mousemove", function(event) {
  hoveredElement = event.target;
});
function getHoveredElementClassName() {
  if (!hoveredElement) {
    return null;
  }
  const className = hoveredElement.classList ? hoveredElement.classList[0] : hoveredElement.className.split(/\s+/)[0];
  return className;
}

// function printV(){
// setTimeout(() => {
//     console.log(getHoveredElementClassName());
// }, 500);
// }

// printV();

function changeInfo(index) {
    let textInfo = document.getElementsById("text-box-text");
    let dp = document.getElementById("default-image");

    let textInfoTX = "", dpTX = "";

    switch(index) {
        case 1 :
            textInfoTX = "Case 1";
            dpTX = "";
    }
}