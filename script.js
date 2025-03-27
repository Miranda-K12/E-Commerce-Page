/*Burger Mene */
const burger = document.querySelector('.burger-menu');
const burgerNavigation = document.querySelector('.burger-navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});
