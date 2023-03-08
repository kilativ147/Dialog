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
};

//Ініціаізація елементів по завершенню завантаження сторінки
window.onload = function() {
	//Ініціалізація червоних кнопок для запиту
	var buttons = document.querySelectorAll(".button-red, .request-close");
	//первірка усіх кнопок на "клік"
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", requstForm);
	}
	
	//Ініціалізація навігаційних посилань
	var navButs = document.querySelectorAll(".nav-but");
	for (var x = 0; x < navButs.length; x++) {
    navButs[x].addEventListener("click", scrollToTarget);
	}
};


//Зворотня форма
function requstForm(event) {
	//шукаємо вікно якому необхідно додати клас
	var formRequest = document.querySelector('.form__request');
	var formArea = document.querySelector('.request__form-row');
	if (formRequest && formArea) {
		formRequest.classList.toggle('_active');
		formArea.classList.toggle('_active');
		document.body.classList.toggle('._lock');	
		
		//зчитуємо атрибут data-param що прописаний у HTML в кожній задіяній кнопці
		var value = this.getAttribute("data-param");				
		//Отримуєм ОБ
		let textElement = document.getElementById(`request_topic`);
		//Змінюємо вміст тегу
		textElement.innerHTML = value;
	}
};


//Скрол
function scrollToTarget(event) {
	event.preventDefault();
	const targetId = event.target.getAttribute("href");
	const target = document.querySelector(targetId);
	const offset = -100;
	const bodyRect = document.body.getBoundingClientRect().top;
	const targetRect = target.getBoundingClientRect().top;
	const targetPosition = targetRect - bodyRect;
	const offsetPosition = targetPosition + offset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth'
	});
};


//Слайдер курсов - Curriculum
const swiperCurriculum = new Swiper('.curriculum_cards_container',{
	//стрілки
	navigation:{
		nextEl: '.button__next',
		prevEl: '.button__prev'
	},
	//відстань між слайдами
	spaceBetween: 10,
	//швидкість зміни слайду, 300 за замовчуванням
	speed: 400,
	//ефект зміни слайду
	effect: 'flip',
	flipEffect: {
		slideShadows: false,
		limitRotation: false //показ лише активного слайду (якщо тру - спина останнього слайду пуста)
	},
})

//ініціюємо кнопки А1,А2,В1,В2,С1
var levelButtons = document.querySelectorAll('.curriculum__levels_item');
//перемикання слайдерів - клік по верхнім кнопкам
if (levelButtons){
	for (let i = 0; i < levelButtons.length; i++) {
		levelButtons[i].addEventListener("click", ()=>{
				swiperCurriculum.slideTo(i);
			})
	};
}

//подія - зміна слайду - передає індекс активного слайду у сторонню функцію
swiperCurriculum.on('slideChange', () => {
  let ind = swiperCurriculum.activeIndex;
	levelButtons.forEach(function(level, index) {
    if (index === ind) {
			levelButtons[index].classList.add('_active');
    } else {
			levelButtons[index].classList.remove('_active');
    }
	})
});



const swiperMentors = new Swiper('.mentors',{
	//пагінація, кнопки кружки
	pagination: {
		el: '.mentor__pag',
		//бутлери
		clickable: true,
	},
	breakpoints:{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
		700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
		970: {			
			//відстань між слайдами
			spaceBetween: 50,
			//кількість видимих слайдів на екрані
			slidesPerView: 3,
			//Для різних екранів, mobile first
		}
	}
})

//Анiмацiя пiдйома слайдiв
const myBlock = document.querySelectorAll('.slideToAnim');

function handleScroll() {
	myBlock.forEach(function(element) {
		let elementPosition = element.getBoundingClientRect().top;
		let offset = window.innerHeight - 0; //на каком расстоянии окна от блока - проигрывать анимацию
		if (elementPosition < offset) {
		  element.classList.add('animate');
		}
	})
}
// Добавляем обработчик события прокрутки
window.addEventListener('scroll', handleScroll);