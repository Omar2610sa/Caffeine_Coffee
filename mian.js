let navBar = document.querySelector("#navv")
let bars = document.querySelector(".fa-bars")
let Xbars = document.querySelector(".fa-x")
let hum = document.querySelector(".humberger")

hum.addEventListener("click",()=>{
    bars.classList.toggle("active")
    Xbars.classList.toggle("active")
    navBar.classList.toggle("active")
})