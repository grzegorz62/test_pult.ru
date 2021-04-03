// Слайдер

$(document).ready(function(){
	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
    autoplaySpeed: 2000,
});

})
// Переключение меню по наведению

const widgetItem = document.querySelectorAll('.widget__item');
  widgetItem.forEach((img) => {
  img.addEventListener('mouseover', (event) => {
  img.closest('.main__menu').querySelector('.widget__img').src = img.getAttribute('data-img');
  img.closest('.main__menu').querySelectorAll('.widget__item').forEach((item) => {
  item.classList.remove('active')
});
  event.currentTarget.classList.add('active');
});
});