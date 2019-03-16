const cantidades = document.getElementsByClassName('quantity-container')
let valorAnterior = [];
for (let index = 0; index < cantidades.length; index++) {
  const element = cantidades[index];
  const menos = element.querySelector(".quantity-container .restar")
  const mas = element.querySelector(".quantity-container .sumar")
  const cantidad = element.querySelector(".quantity-container .item-quantity")
  console.log(cantidad)
  menos.addEventListener('click', (e) => {
    if (parseInt(cantidad.value) === 1) {

    } else {
      cantidad.value = parseInt(cantidad.value) - 1;
    }
    valorAnterior[index] = cantidad.value
  })
  mas.addEventListener('click', (e) => {
    cantidad.value = parseInt(cantidad.value) + 1
    valorAnterior[index] = cantidad.value
  })
  cantidad.addEventListener('change', () => {
    const auxiliar = parseInt(cantidad.value)
    if (cantidad.value !== auxiliar + "") {
      cantidad.value = valorAnterior[index]
    } else if (auxiliar <= 1) {
      cantidad.value = valorAnterior[index]
    } else {
    }
  })
  cantidad.addEventListener('focus', () => {
    valorAnterior[index] = cantidad.value;
  })
  valorAnterior.push("1")

}
