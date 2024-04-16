const range = document.querySelector('.form__range');
const rangeCount = document.querySelector('.form__span');
const inputSelect = document.querySelector('.input__select');
const formImg = document.querySelector('.form__img');
const inputSelectList = document.querySelector('.input__select-list');
const inputSelectItem = document.querySelectorAll('.input__select-item');
const inputSelectTitle = document.querySelector('.input__select-title');
const inputSelectHidden = document.querySelector('.input__select-hidden');
const nav = document.querySelector('.nav');
const headerBtn = document.querySelector('.header__btn');
const menuBtn = document.querySelectorAll('.menu__btn');
const navItems = document.querySelectorAll('.header__item');

range.addEventListener('change', () => {
  rangeCount.textContent = ""
  rangeCount.innerHTML = range.value + " %"; 
})

inputSelect.addEventListener('click', () => {
  formImg.classList.toggle('input__img-rotate');
  inputSelectList.classList.toggle('input__select-list_visuality');
})

inputSelectItem.forEach(function(listItem) {
  listItem.addEventListener('click', function(e) {
    e.stopPropagation;
    inputSelectTitle.innerText = this.innerText;
    inputSelectHidden.value = this.dataset.value;
  })
});


headerBtn.addEventListener('click', () => {
  nav.classList.toggle('nav__active');
  headerBtn.classList.toggle('header__btn-active');
  document.body.classList.toggle('no-scroll');
})

navItems.forEach(item => {
  item.addEventListener('click', () => {
    nav.classList.toggle('nav__active');
    headerBtn.classList.toggle('header__btn-active');
    document.body.classList.toggle('no-scroll');
  });
})


menuBtn.forEach(item => {

  item.addEventListener('click', ({target}) => {

    menuBtn.forEach(item => {
      if (target !== item.classList.contains('.menu__btn-active')) {
        item.classList.remove('menu__btn-active');
      }
    })
    target.classList.add('menu__btn-active');
  })

  headerLink.forEach(item => {});
})

// slider

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSlider();
}

function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

function updateSlider() {
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

updateSlider();



