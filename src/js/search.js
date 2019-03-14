const menuFilter = document.querySelectorAll('.menu-filter-element-container')
menuFilter.forEach(element => {
  element.addEventListener('click', () => {
    console.log(element);
    element.querySelector('.menu-filter-options').classList.toggle('hide-options')
    element.querySelector('i').classList.toggle('rotate')

  })
});