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

imgBehind.setAttribute('src', `${arreglo[1].jpg}`)
imgBehindSource.setAttribute('srcset', `${arreglo[1].webp}`)
infoContainer.children[0].innerText = arreglo[1].tag
infoContainer.children[1].innerText = arreglo[1].titulo
infoContainer.children[2].innerText = arreglo[1].descripcion

let nextPrevious = true
let indiceUno = 1
let indiceDos = 2
let tamanoArreglo = 0;
for (let i in arreglo) {
  tamanoArreglo++;
}
function nextImage() {
  if (indiceUno === tamanoArreglo) {
    indiceUno = 1
    indiceDos++
  } else if (indiceDos === tamanoArreglo) {
    indiceDos = 1
    indiceUno++
  } else {
    indiceDos++
    indiceUno++
  }
  updateImage()
}
function previousImage() {
  if (indiceUno === 1) {
    indiceDos = indiceUno
    indiceUno = tamanoArreglo
  } else if (indiceUno === tamanoArreglo) {
    indiceDos = tamanoArreglo
    indiceUno = indiceDos - 1
  } else {
    indiceUno--
    indiceDos = indiceUno + 1
  }
  actualizar()
}
actualizar = () => {
  imgBehind.style.display = "none"
  imgBehindSource.style.display = "none"
  imgBehind.setAttribute('src', `${arreglo[indiceUno].jpg}`)
  imgBehindSource.setAttribute('srcset', `${arreglo[indiceUno].webp}`)
  imgBehind.style.display = "initial"
}
let uno = {
  jpg: arreglo[indiceUno].jpg,
  webp: arreglo[indiceUno].webp,
  tag: arreglo[indiceUno].tag,
  titulo: arreglo[indiceUno].titulo,
  descripcion: arreglo[indiceUno].descripcion
}
let dos =
{
  jpg: arreglo[indiceDos].jpg,
  webp: arreglo[indiceDos].webp,
  tag: arreglo[indiceDos].tag,
  titulo: arreglo[indiceDos].titulo,
  descripcion: arreglo[indiceDos].descripcion
}
function updateImage() {
  uno = {
    jpg: arreglo[indiceUno].jpg,
    webp: arreglo[indiceUno].webp,
    tag: arreglo[indiceUno].tag,
    titulo: arreglo[indiceUno].titulo,
    descripcion: arreglo[indiceUno].descripcion
  }
  dos = {
    jpg: arreglo[indiceDos].jpg,
    webp: arreglo[indiceDos].webp,
    tag: arreglo[indiceDos].tag,
    titulo: arreglo[indiceDos].titulo,
    descripcion: arreglo[indiceDos].descripcion
  }
}

next.addEventListener('click', () => {
  infoContainer.classList.add('opacity')
  controls.classList.add('opacity')
  info.classList.add('info-out')
  imgTopPicture.classList.remove('remove-animation');
  imgTopPicture.classList.add('front')
  nextPrevious = true

})
previous.addEventListener('click', () => {
  previousImage()
  info.classList.add('info-out')
  imgTopPicture.classList.remove('remove-animation');
  imgTopPicture.classList.add('front')
  infoContainer.classList.remove('opacity')
  nextPrevious = false
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
    if (nextPrevious) {
      nextImage()
      changeImages()
    } else {

      updateImage()
      changeImages()
    }
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
  infoContainer.children[0].innerText = uno.tag
  infoContainer.children[1].innerText = uno.titulo
  infoContainer.children[2].innerText = uno.descripcion
}



