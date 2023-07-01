const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');

let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

slides.addEventListener('mousedown', dragStart);
slides.addEventListener('touchstart', dragStart);
slides.addEventListener('mouseup', dragEnd);
slides.addEventListener('touchend', dragEnd);
slides.addEventListener('mousemove', drag);
slides.addEventListener('touchmove', drag);

function dragStart(event) {
  event.preventDefault();
  if (event.type === 'touchstart') {
    startPos = event.touches[0].clientX;
  } else {
    startPos = event.clientX;
    slides.classList.add('grabbing');
  }
  isDragging = true;
  animationID = requestAnimationFrame(animation);
}

function drag(event) {
  if (isDragging) {
    const currentPosition = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
    const translate = currentTranslate + currentPosition - startPos;
    slides.style.transform = `translateX(${translate}px)`;
  }
}

function dragEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < slides.children.length - 1) {
    currentIndex += 1;
  }

  if (movedBy > 100 && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
  slides.classList.remove('grabbing');
}

function setPositionByIndex() {
  slides.style.transform = `translateX(${-currentIndex * slider.offsetWidth}px)`;
  currentTranslate = -currentIndex * slider.offsetWidth;
  prevTranslate = currentTranslate;
}

function animation() {
  slides.style.transform = `translateX(${currentTranslate}px)`;
  animationID = requestAnimationFrame(animation);
}

setPositionByIndex();
