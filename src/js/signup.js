const numero1 = document.getElementById('numero1')
const numero2 = document.getElementById('numero2')
const operacion = document.getElementById('operacion')
const answer = document.getElementById('answer')
const button = document.querySelector('.login-signup form button')

const operador = ['más', 'menos']
const num1 = 0
const num2 = 0
function generarOperacion(params) {
  let indiceOperacion = Math.random() > 0.5 ? 1 : 0;
  let num1 = Math.floor(Math.random() * (10 - 1)) + 1;
  let num2 = Math.floor(Math.random() * (10 - 1)) + 1;
  operacion.innerText = operador[indiceOperacion]
  numero1.innerText = num1
  numero2.innerText = num2
  if (operador[indiceOperacion] === "más") {
    return num1 + num2
  } else {
    return num1 - num2
  }
}
const respuesta = generarOperacion();
console.log(respuesta)
answer.addEventListener('keyup', (e) => {
  if (parseInt(answer.value) === respuesta) {
    answer.style.border = "1px solid green"
    answer.style.borderLeft = "10px solid green"
    button.disabled = false
    button.style.cursor = "pointer"
    button.style.background = "#363738"
  } else {
    button.style.cursor = "no-drop"
    button.style.background = "#767778"
    button.disabled = true
    answer.style.border = "1px solid red"
    answer.style.borderLeft = "10px solid red"
  }
})
