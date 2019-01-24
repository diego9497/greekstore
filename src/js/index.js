const header = document.getElementById('header');
const logo = document.getElementById('logo');
const menu = document.getElementById('menu');
const hero = document.getElementById('hero');
console.log(menu);

document.addEventListener('scroll', e => {
  if (document.documentElement.scrollTop >= hero.clientHeight) {
    //   console.log('Entró')
    //   // logo.classList.add('color')
    //   header.classList.remove('background-color-map')
    menu.classList.add('fixed')

    //   // menu.classList.add('color')
  } else {
    //   // logo.classList.remove('color')
    //   // menu.classList.remove('color')
    //   header.classList.add('background-color-map')
    menu.classList.remove('fixed')
  }
})


