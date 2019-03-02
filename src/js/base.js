// botones menu-lateral
const botonesMenu = document.querySelectorAll('.menu-principal-lateral .item-menu-principal-lateral')
botonesMenu.forEach(element => {
  element.addEventListener('click', () => {
    element.querySelector('ol').classList.toggle('show-sub-menu-lateral')
  })
});

const menuButton = document.getElementById('menu-button');
const menuLateral = document.getElementById('menu-lateral');
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
menuButton.addEventListener('click', () => {
  line1.classList.toggle('menu-button-line1')
  line2.classList.toggle('menu-button-line2')
  line3.classList.toggle('menu-button-line3')
  menuLateral.classList.toggle('show-menu-lateral')
})
const lupaContainer = document.getElementById('lupa-container');
const iconSearchUp = document.getElementById('icon-search-up');
const iconSearchDown = document.getElementById('icon-search-down');
const searchContainer = document.getElementById('search-container');
let contador = 0;
searchContainer.classList.add('hide')
lupaContainer.addEventListener('click', () => {
  if (contador === 0) {
    searchContainer.classList.remove('hide')
    searchContainer.classList.remove('hide')
    searchContainer.classList.remove('hide-search-bar')
    iconSearchUp.classList.add('lupa-container-search-move')
    contador++;
  } else {
    iconSearchUp.classList.remove('hide')
    iconSearchDown.classList.add('hide-icon')
    searchContainer.classList.add('hide-search-bar')
    iconSearchUp.classList.add('lupa-container-search-move-2')
    contador = 0;
  }
})
iconSearchUp.addEventListener('animationend', (e) => {
  if (e.animationName === "lupa") {
    iconSearchUp.classList.add('hide')
    iconSearchDown.classList.remove('hide-icon')
    iconSearchUp.classList.remove('lupa-container-search-move')
  }
  if (e.animationName === "lupa2") {
    searchContainer.classList.add('hide')
    iconSearchUp.classList.remove('hide')
    iconSearchDown.classList.add('hide-icon')
    iconSearchUp.classList.remove('lupa-container-search-move-2')
  }
})

