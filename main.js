const navbar = document.querySelector(".navbar")
const navbar_m = document.querySelector(".navbar_mobile")
const toggle_nav = document.getElementById("toggle-nav")
const nav = document.querySelector(".navbar_mobile_nav")
const scrolls = document.querySelectorAll(".scroll")


toggle_nav.addEventListener("click", openNav)

function openNav() {
    nav.classList.toggle("active");
    if(nav.classList.contains("active")) {
        toggle_nav.setAttribute("class", "fa fa-times")
    } else {
        toggle_nav.setAttribute("class", "fa fa-bars")
    }
}

window.addEventListener('scroll', stickyNavbar)

function stickyNavbar() {
    navbar.classList.toggle('sticky', scrollY > 50)
    navbar_m.classList.toggle('sticky', scrollY > 50)
}

scrolls.forEach(scroll => {
    scroll.addEventListener("click", smoothScroll)
})

function smoothScroll(e) {
    e.preventDefault()
    let id = this.getAttribute("href")
    const offsetTop = document.querySelector(id).offsetTop
    scroll({
        top: offsetTop,
        behavior: "smooth"
    });
}