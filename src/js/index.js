const menu = document.getElementById('menu')
const header = document.getElementById('header')
const hero = document.getElementById('hero')
const olas = document.getElementById('olas')
const footer = document.getElementById('footer')

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
  const abajo = document.documentElement.scrollHeight - window.innerHeight - document.documentElement.scrollTop
  if (abajo <= footer.clientHeight) {
    olas.classList.add('hide')
    menu.style.top = "initial"
    menu.style.bottom = `${footer.clientHeight - abajo}px`
  } else {
    olas.classList.remove('hide')
    menu.setAttribute('style', null)
  }
})


