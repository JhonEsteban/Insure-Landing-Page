const changeButtonImage = (e) => {
  const btnBurger = e.target,
    navegationMenu = document.querySelector('#navegationMenu'),
    isOpen = navegationMenu.classList.contains('show');

  if (isOpen) {
    btnBurger.src = './assets/images/icon-close.svg';
  } else {
    btnBurger.src = './assets/images/icon-hamburger.svg';
  }
};

export default changeButtonImage;
