/*const menu = document.getElementById('menu')
const header = document.getElementById('header')
const hero = document.getElementById('hero')
const olas = document.getElementById('olas')
const footer = document.getElementById('footer')

menuChange = e => {
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
}
function desktopVersion(media) {
  if (media.matches) {
    document.addEventListener('scroll', menuChange)
  } else {
    document.removeEventListener('scroll', menuChange);
    menu.classList.remove('fixed')
    olas.classList.add('hide')
  }
}

let media = window.matchMedia("(min-width: 1025px)")
desktopVersion(media);
media.addListener(desktopVersion);
*/

let uno = {
  jpg: "./assets/images/hero-1.jpg",
  webp: "./assets/images/hero-1.webp"
}
let dos =
{
  jpg: "./assets/images/hero-2.jpg",
  webp: "./assets/images/hero-2.webp"
}
const imgBehindPicture = document.querySelector('.img-behind');
const imgTopPicture = document.querySelector('.img-top');
const imgBehind = document.querySelector('.img-behind img');
const imgTop = document.querySelector('.img-top img');
const imgBehindSource = document.querySelector('.img-behind source:nth-child(1)');
const imgTopSource = document.querySelector('.img-top source:nth-child(1)');
const info = document.getElementById('hero-info')
const play = document.getElementById('play')
play.addEventListener('click', () => {
  info.classList.add('info-out')
  imgTopPicture.classList.remove('remove-animation');
  imgTopPicture.classList.add('front')
})

let cont = 0;
info.addEventListener('animationend', (e) => {
  if (e.animationName === "move-info") {
    changeImages()
    if (cont === 0) {
      imgTopPicture.classList.add('remove-animation')
      cont++;
    }
  }
  if (e.animationName === "info-out") {
    info.classList.remove('info-out')
  }
})
imgTopPicture.addEventListener('animationend', (e) => {
  if (e.animationName === "move-out") {
    const aux = uno;
    uno = dos;
    dos = aux
    changeImages()
    imgTopPicture.classList.add('remove-animation');
    imgTopPicture.classList.remove('front')
    info.classList.remove('info-out')
  }
})
changeImages = () => {
  imgTop.setAttribute('src', `${uno.jpg}`)
  imgBehind.setAttribute('src', `${dos.jpg}`)
  imgTopSource.setAttribute('srcset', `${uno.webp}`)
  imgBehindSource.setAttribute('srcset', `${dos.webp}`)
}



