let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlayMenu = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('abrir-menu');
});


menu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
})

overlayMenu.addEventListener('click', () => {
  menu.classList.remove('abrir-menu')
})


document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function showNextSlide() {
    items[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add("active");
  }

  setInterval(showNextSlide, 3000);
});

