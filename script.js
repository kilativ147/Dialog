//Меню бургер
const burgerButton = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__content');
if (burgerContainer){
  document.addEventListener("click", burg); 
  function burg(event) {
    if (event.target.closest('.header__burger')) {
      burgerButton.classList.toggle('_active');
      burgerContainer.classList.toggle('_active');
      document.body.classList.toggle('._lock');
    }
  }
}