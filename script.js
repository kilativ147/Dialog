//Меню бургер
const burgerButton = document.querySelector('.header__burger');
const burgerContainer = document.querySelector('.header__content-column');
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

//Функція відкриття та закриття вікна з запитом
window.onload = function() {
	//додаємо усі задіяні кнопки
  var buttons = document.querySelectorAll(".button-red, .request-close");
  //первірка усіх кнопок на "клік"
	for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
			//шукаємо вікно якому необхідно додати клас
      var formRequest = document.querySelector('.form__request');
			var formArea = document.querySelector('.request__form-row');
			if (formRequest && formArea)
			{
				formRequest.classList.toggle('_active');
				formArea.classList.toggle('_active');
				document.body.classList.toggle('._lock');	
				//зчитуємо атрибут data-param що прописаний у HTML в кожній задіяній кнопці
				var value = this.getAttribute("data-param");				
				//Отримуєм ОБ
				let textElement = document.getElementById(`request_topic`);
				//	Змінюємо вміст тегу
				textElement.innerHTML = value;
			}
    });
  }
}

//Курси
  

