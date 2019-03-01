
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
const infoContainer = document.querySelector('.hero-info-container')
const controls = document.querySelector('.controls')
const next = document.getElementById('next')
const previous = document.getElementById('previous')
next.addEventListener('click', () => {
  infoContainer.classList.add('opacity')
  controls.classList.add('opacity')
  info.classList.add('info-out')
  imgTopPicture.classList.remove('remove-animation');
  imgTopPicture.classList.add('front')
})
previous.addEventListener('click', () => {
  info.classList.add('info-out')
  imgTopPicture.classList.remove('remove-animation');
  imgTopPicture.classList.add('front')
  infoContainer.classList.remove('opacity')
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
    infoContainer.classList.remove('opacity')
    controls.classList.remove('opacity')
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



