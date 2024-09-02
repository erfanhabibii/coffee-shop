// Consts
const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const subMenubtn = document.querySelector(".submenu-btn");
const subMenuToggle = document.querySelector(".submenu");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const navCloseBtn = document.querySelector(".nav-close-btn");
const shoping = document.querySelector(".shoping");
const shopingCart = document.querySelector(".shoping-cart");
const shopingCloseBtn = document.querySelector(".shoping-close-btn");
const titleType1 = document.querySelector(".type-writer1");
const titleType2 = document.querySelector(".type-writer2");
const percentCounter = document.querySelectorAll(".number-counter");

// Toggles
toggleThemeBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    });
});

// EventListeners
subMenubtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    subMenuToggle.classList.toggle("submenu--open");
});
navIcon.addEventListener("click", () => {
    nav.classList.remove("-right-64");
    nav.classList.add("right-0");
    overlay.classList.add("overlay--visible");
});
navCloseBtn.addEventListener("click", () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible");
});
overlay.addEventListener("click", () => {
    nav.classList.add("-right-64");
    nav.classList.remove("right-0");
    overlay.classList.remove("overlay--visible");
    shoping.classList.remove("left-0");
    shoping.classList.add("-left-64");
});
shopingCart.addEventListener("click", () => {
    shoping.classList.remove("-left-64");
    shoping.classList.add("left-0");
    overlay.classList.add("overlay--visible");
});
shopingCloseBtn.addEventListener("click", () => {
    shoping.classList.remove("left-0");
    shoping.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
});
window.addEventListener("load", () => {
    let text1 = "قهوه عربیکا تانزانیا";
    let text2 = "یک فنجان بالانس !";
    let startIndex = 0;
    typeWriter(text1, startIndex, titleType1);
    setTimeout(() => {
        typeWriter(text2, startIndex, titleType2);
    }, 2000)
});
window.addEventListener("load", () => {
    let count = 0
    numberCounter(percentCounter[0], 15, count)
    numberCounter(percentCounter[1], 13, count)
    numberCounter(percentCounter[2], 19, count)
    numberCounter(percentCounter[3], 22, count)
    numberCounter(percentCounter[4], 31, count)
    numberCounter(percentCounter[5], 11, count)
})

//functions
function typeWriter(text, index, elem) {
    if (index < text.length) {
        elem.innerHTML += text[index];
        index++;
    }
    setTimeout(() => {
        typeWriter(text, index, elem);
    }, 80);
}
function numberCounter(elem, max, count) {
    if(count < max) {
        elem.innerHTML = count + "%"
        count++
    }
    setTimeout(() => {
        numberCounter(elem, max, count)
    }, 50)
}