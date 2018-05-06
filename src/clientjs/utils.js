const getAvailableHeight = () =>
  windowHeight - 4 - document.querySelector('.main-header').clientHeight;

const getRandomValue = (unit = 5) =>
  (window.crypto
    ? window.crypto.getRandomValues(new Uint8Array(1)).map(number => Math.round(number / unit))[0]
    : Math.round(Math.random() * (150 / unit)));

const enableMenu = () => {
  const menuItem = document.querySelector('.menu');
  const navItem = document.querySelector('.nav');
  menuItem.addEventListener('click', () => {
    navItem.classList.add('active');
  });
  navItem.addEventListener('click', () => {
    navItem.classList.toggle('active');
  });
};

const createDefaultCanvas = () => {
  createCanvas(windowWidth, getAvailableHeight());
  enableMenu();
};

const defaultResizeAction = () => resizeCanvas(windowWidth, getAvailableHeight());
