const menu = document.getElementById('menu');
const header = document.getElementById('header');
const hero = document.getElementById('hero');
const olas = document.getElementById('olas')

document.addEventListener('scroll', e => {
  if (document.documentElement.scrollTop >= hero.clientHeight) {
    menu.classList.add('fixed')
    header.classList.add('border')
    olas.classList.remove('hide')
  } else {
    menu.classList.remove('fixed')
    olas.classList.add('hide')
    header.classList.remove('border')
  }
})


