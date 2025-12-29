// Humberger Nav-Bar
let navBar = document.querySelector("#navv")
let bars = document.querySelector(".fa-bars")
let Xbars = document.querySelector(".fa-x")
let hum = document.querySelector(".humberger")

hum.addEventListener("click",()=>{
    bars.classList.toggle("active")
    Xbars.classList.toggle("active")
    navBar.classList.toggle("active")
})
// CLose Ul 
document.querySelectorAll("#navv li a").forEach((link => {
    link.addEventListener("click", ()=>{
    navBar.classList.remove("active")
    bars.classList.add("active")     
    Xbars.classList.remove("active")
    })
}))
// Menu Selections

const filterBtn = document.querySelectorAll(".filter-btn")

const menuItems = document.querySelectorAll(".item")
filterBtn.forEach((btn)=> {
    btn.addEventListener("click", ()=>{
    const category = btn.getAttribute("data-category")
    menuItems.forEach((item)=>{
        if (category === "all" || category === item.getAttribute("data-category")){
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })
    })
})