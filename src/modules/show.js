//Функция показать скрыть текст main

const showBtn = document.getElementById('showBtn');
const text2 = document.querySelector('.content__text--2');
const text3 = document.querySelector('.content__text--3');
const text4 = document.querySelector('.content__text--4');
const img = document.querySelector('.content__button--img');
const textBtn = document.querySelector('.content__button--text');

showBtn.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    if (text3.style.display === 'none') {
        text3.style.display = 'flex';
        text4.style.display = 'flex';
        text4.classList.add('slide-up');
        text3.classList.add('slide-up');
        img.classList.add('rotate');
        showBtn.querySelector('.content__button--text').textContent = 'Скрыть';
    } else {
        text3.style.display = 'none';
        text4.style.display = 'none';
        img.classList.remove('rotate');
        showBtn.querySelector('.content__button--text').textContent = 'Читать далее';
    }
   } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
			if (text2.style.display === 'flex') {
					text2.style.display = 'none';
					text3.style.display = 'flex';
          text4.style.display = 'flex';
          text3.classList.add('slide-up');
          text4.classList.add('slide-up');
					img.classList.add('rotate');
					showBtn.querySelector('.content__button--text').textContent = 'Скрыть';
			} else {
					text2.style.display = 'flex';
					text3.style.display = 'none';
          text4.style.display = 'none';
					img.classList.remove('rotate');
					showBtn.querySelector('.content__button--text').textContent = 'Читать далее';
			} 
	} else if (window.innerWidth >= 1120) {
    if (text4.style.display === 'none') {
      text4.style.display = 'flex';
      text4.classList.add('slide-up');
      img.classList.add('rotate');
      showBtn.querySelector('.content__button--text').textContent = 'Скрыть';
    } else { 
          text4.style.display = 'none';
					img.classList.remove('rotate');
					showBtn.querySelector('.content__button--text').textContent = 'Читать далее';
    }
  }
});

//Функция показать скрыть  brands

document.addEventListener("DOMContentLoaded", function () {
const showButton = document.getElementById("showButton");
const brandsButtons = document.querySelectorAll(".brands-list__item");
const showButtonImg = document.querySelector(".brands__button--img");

  let isHidden = true;

  function toggleBrandsVisibility() {
    brandsButtons.forEach(function (brandsButton) {
      if (window.innerWidth >= 1120) {
        if (brandsButton.classList.contains("brands-9") || 
            brandsButton.classList.contains("brands-10") ||
            brandsButton.classList.contains("brands-11") 
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      } else {
        if (brandsButton.classList.contains("brands-7") ||
            brandsButton.classList.contains("brands-8") ||
            brandsButton.classList.contains("brands-9") ||
            brandsButton.classList.contains("brands-10") ||
            brandsButton.classList.contains("brands-11")
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      }
    });
  }

  toggleBrandsVisibility();
  window.addEventListener('resize', toggleBrandsVisibility);

  showButton.addEventListener("click", function () {
    isHidden = !isHidden;
    toggleBrandsVisibility();

    showButtonImg.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";

    let buttonText = showButton.querySelector(".brands__button--text");
    buttonText.textContent = isHidden ? "Показать все" : "Скрыть";
  });
});

//Функция показать скрыть type

document.addEventListener("DOMContentLoaded", function () {
const showButton = document.querySelector(".type-show__button");
const brandsButtons = document.querySelectorAll(".section-type__botton");
const showButtonImg = document.querySelector(".type-show__img");

let isHidden = true;

  function toggleBrandsVisibility() {
    brandsButtons.forEach(function (brandsButton) {
      if (window.innerWidth >= 1120) {
        if (brandsButton.classList.contains("type-5") || 
            brandsButton.classList.contains("type-6") ||
            brandsButton.classList.contains("type-7") ||
						brandsButton.classList.contains("type-8") ||
            brandsButton.classList.contains("type-9") 
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      } else {
        if (brandsButton.classList.contains("type-4") || 
						brandsButton.classList.contains("type-5") || 
            brandsButton.classList.contains("type-6") ||
            brandsButton.classList.contains("type-7") ||
						brandsButton.classList.contains("type-8") ||
            brandsButton.classList.contains("type-9") 
           ) {
          brandsButton.style.display = isHidden ? "none" : "block";
        } else {
          brandsButton.style.display = "block";
        }
      }
    });
  }

  toggleBrandsVisibility();
  window.addEventListener('resize', toggleBrandsVisibility);

  showButton.addEventListener("click", function () {
    isHidden = !isHidden;
    toggleBrandsVisibility();

    showButtonImg.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";

    let buttonText = showButton.querySelector(".type-show__text");
    buttonText.textContent = isHidden ? "Показать все" : "Скрыть";
  });
});
