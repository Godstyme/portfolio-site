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