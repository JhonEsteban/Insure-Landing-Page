import toggleMenu from './js/toggleMenu.js';
import changeButtonImage from './js/changeButtonImage.js';

const btnBurger = document.querySelector('#btnBurger');

btnBurger.addEventListener('click', (e) => {
  toggleMenu();
  changeButtonImage(e);
});
