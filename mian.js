// Humberger Nav-Bar
let navBar = document.querySelector("#navv")
let bars = document.querySelector(".fa-bars")
let Xbars = document.querySelector(".fa-x")
let hum = document.querySelector(".humberger")

hum.addEventListener("click", () => {
    bars.classList.toggle("active")
    Xbars.classList.toggle("active")
    navBar.classList.toggle("active")
})
// CLose Ul 
document.querySelectorAll("#navv li a").forEach((link => {
    link.addEventListener("click", () => {
        navBar.classList.remove("active")
        bars.classList.add("active")
        Xbars.classList.remove("active")
    })
}))
// Menu Selections

const filterBtn = document.querySelectorAll(".filter-btn")

const menuItems = document.querySelectorAll(".item")
filterBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category")
        menuItems.forEach((item) => {
            if (category === "all" || category === item.getAttribute("data-category")) {
                item.style.display = "flex"
            } else {
                item.style.display = "none"
            }
        })
    })
})

// Testmonial sliders 
let currentIndex = 0
const slides = document.querySelectorAll("#testimonals .col")
const dots = document.querySelectorAll("#testimonals .dot")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
function showSlides(index) {
    // Remove avtive from every slid & dot
    slides.forEach((slide , i) => {
        slide.classList.remove("active")
        dots[i].classList.remove("active")
    })
    // addactive for only slide active
    slides[index].classList.add("active")
    dots[index].classList.add("active")
}
// PrevBtn function
function prevSLide(){
    currentIndex-- 
    if(currentIndex < 0){
        currentIndex = slides.length -1
    }
    showSlides(currentIndex)
}
// nextBtn function
function nextSLide(){
    currentIndex++
    if(currentIndex > slides.length -1){
        currentIndex =0
    }
    showSlides(currentIndex)
}
// Dots click
dots.forEach((dot , index) => {
    dot.addEventListener("click", ()=>{
        currentIndex = index
        showSlides(currentIndex)
    })
})
// Call btns functions
prevBtn.addEventListener("click", prevSLide)
nextBtn.addEventListener("click", nextSLide)

// Auto slider 
// setInterval(function(){
//     nextSLide()
// },3000)