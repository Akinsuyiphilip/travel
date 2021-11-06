let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
let formBtn = document.querySelector("#login-btn");
let loginform = document.querySelector(".login-form-container");
let formclose = document.querySelector("#form-close");
let discoverlogin = document.getElementById("discoverlogin")
let menu = document.getElementById("menu-bar");
let navbar = document.getElementsByClassName("navbar");
let loging = document.getElementById("loginning")
let landingpage = document.getElementById("landingpage")
let home = document.getElementById("home")
let star = document.getElementById("star")



window.onscroll = function () {
    searchBtn.classList.remove("fa-times");
    searchBar.classList.remove("active");
};


menu.addEventListener("click", function () {
    menu.classList.toggle("fa-times")
    navbar.classList.toggle("hidden")
});


searchBtn.addEventListener("click", function () {
    searchBtn.classList.toggle("fa-times");
    searchBar.classList.toggle("active");
});

formBtn.addEventListener("click", function () {
    loginform.style.display = "flex";
})

formclose.addEventListener("click", function () {
    loginform.style.display = "none";
})
discoverlogin.addEventListener("click", function () {
    loginform.style.display = "flex";
})

document.querySelector("#loginning").addEventListener("click", function () {
    landingpage.classList.remove("hidden")
    home.classList.add("hidden")
    star.style.display = "none"
    
})


