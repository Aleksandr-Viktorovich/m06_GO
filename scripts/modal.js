const headerBtn = document.querySelector('.header__btn');
const overlay = document.querySelector('.modal__overlay');


const modal = () => {
  headerBtn.addEventListener('click', () => {
    overlay.classList.add('is-visible');
  });
};


const closeModal = () => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('.form__close')) {
      overlay.classList.remove('is-visible');
    }
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      overlay.classList.remove('is-visible');
    }
  });
};

modal()
closeModal()
