// ````````````````date````````````````
const now = new Date().getFullYear()
document.querySelector('#date').innerHTML = now

// ````````````fix nav ```````````````````
const nav = document.querySelector('.header-nav')
const topOfNav = nav.offsetTop;
const fixNav = () =>{
  if (window.scrollY == topOfNav) {
    document.body.style.paddingTop = 0;
    document.body.classList.add('header-list')
    document.body.classList.remove('fixedNav')
  } else {
    document.body.classList.add('fixedNav')
  }
}
window.addEventListener('scroll', fixNav)


// `````` about hamburger menu start here ```````
const navbar = document.querySelector(".navbar")
const ham = document.querySelector(".ham")

// toggles hamburger menu in and out when clicking on the hamburger
const toggleHamburger = () => {
  navbar.classList.toggle("showNav")
  ham.classList.toggle("showClose")
}

ham.addEventListener("click", toggleHamburger)

// toggle when clicking on links
const menuLinks = document.querySelectorAll(".menuLink")
menuLinks.forEach( 
  function(menuLink) { 
    menuLink.addEventListener("click", toggleHamburger) 
  }
)