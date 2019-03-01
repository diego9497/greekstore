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