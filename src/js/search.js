const menuFilter = document.querySelectorAll('.menu-filter-element-container')
const menuContainer = document.getElementById('menu-container')
const filterButton = document.getElementById('filter-button')

console.log(menuContainer.offsetHeight)
menuFilter.forEach(element => {
  element.addEventListener('click', (e) => {
    console.log(menuContainer.offsetHeight)
    if (e.target.className !== "price-range-field") {
      element.querySelector('.menu-filter-options').classList.toggle('hide-options')
      element.querySelector('i').classList.toggle('rotate')
    }
  })
})
let esconderMostrar = () => {
  menuContainer.classList.toggle("hide");
}
function modoMovil(x) {
  if (x.matches) {
    menuContainer.classList.add("hide");
    filterButton.addEventListener('click', esconderMostrar)
    menuFilter.forEach(element => {
      element.querySelector('.menu-filter-options').classList.add('hide-options')
      element.querySelector('i').classList.toggle('rotate')
    })
  } else {
    menuContainer.classList.remove("hide");
    filterButton.removeEventListener('click', esconderMostrar);
    menuFilter.forEach(element => {
      element.querySelector('.menu-filter-options').classList.remove('hide-options')
      element.querySelector('i').classList.toggle('rotate')
    })
  }
}
let media = window.matchMedia("(max-width: 760px)")
modoMovil(media)
media.addListener(modoMovil)


