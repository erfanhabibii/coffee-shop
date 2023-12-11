// Consts
const toggleThemeBtn = document.querySelectorAll(".toggle-theme");
const subMenubtn= document.querySelector(".submenu-btn")
const subMenuToggle = document.querySelector(".submenu")
const navIcon = document.querySelector(".nav-icon")
const nav = document.querySelector(".nav")
const overlay = document.querySelector(".overlay")
const navCloseBtn = document.querySelector(".nav-close-btn")
const shoping = document.querySelector(".shoping")
const shopingCart = document.querySelector(".shoping-cart")
const shopingCloseBtn = document.querySelector(".shoping-close-btn")

// Toggles
toggleThemeBtn.forEach(btn =>{
    btn.addEventListener("click", function(){
        if (localStorage.theme === "dark"){
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme" , "dark");
        }
    })
})

// EventListeners
subMenubtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-orange-300");
    subMenuToggle.classList.toggle("submenu--open");
})
navIcon.addEventListener("click", ()=>{
    nav.classList.remove("-right-64")
    nav.classList.add("right-0")
    overlay.classList.add("overlay--visible")
})
navCloseBtn.addEventListener("click", () =>{
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.remove("overlay--visible")
})
overlay.addEventListener("click", () =>{
    nav.classList.add("-right-64")
    nav.classList.remove("right-0")
    overlay.classList.remove("overlay--visible")
    shoping.classList.remove("left-0")
    shoping.classList.add("-left-64")
})
shopingCart.addEventListener("click", () => {
    shoping.classList.remove("-left-64")
    shoping.classList.add("left-0")
    overlay.classList.add("overlay--visible")
})
shopingCloseBtn.addEventListener("click", () => {
    shoping.classList.remove("left-0")
    shoping.classList.add("-left-64")
    overlay.classList.remove("overlay--visible")
})