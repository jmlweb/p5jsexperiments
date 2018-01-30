const getAvailableHeight = () =>
  windowHeight - 4 - document.querySelector('.main-header').clientHeight;

const getRandomValue = (unit = 5) =>
  (window.crypto
    ? window.crypto.getRandomValues(new Uint8Array(1)).map(number => Math.round(number / unit))[0]
    : Math.round(Math.random() * (150 / unit)));

const createDefaultCanvas = () => {
  createCanvas(windowWidth, getAvailableHeight());
  document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.nav').classList.add('active');
  });
  document.querySelector('.nav').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
  });
};

const defaultResizeAction = () => resizeCanvas(windowWidth, getAvailableHeight());
