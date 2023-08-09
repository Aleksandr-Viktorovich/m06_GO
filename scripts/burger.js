const duration = 800;
const distance = 775;

const burgerBtn = document.querySelector('.burg__btn');
const overlay = document.querySelector('.burg__wrapper');
const list = document.querySelector('.burg__list');
const listItem = document.querySelectorAll('.burg__list-item');


const startBurger = (duration, callback) => {
  let startBurger = NaN

  requestAnimationFrame(function step(timestamp) {
    startBurger ||= timestamp;

    const progress = (timestamp - startBurger) / duration;

    callback (progress);
    if (progress < 1) {
      requestAnimationFrame(step)
    }
  })
}


burgerBtn.addEventListener('click', () => {
  startBurger(duration, (progress) => {
    overlay.classList.add('is-visible');
    const left = progress * distance;
    overlay.style.transform = `translateX(${left}px)`
  })
})





overlay.addEventListener('click', e => {
  console.log(e.target)
  if (e.target === overlay) {
    overlay.classList.remove('is-visible');
  }
});

