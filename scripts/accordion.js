const faqItems = document.querySelectorAll('.faq__list-item');
const faqBtn = document.querySelectorAll('.faq__btn');
const faqText = document.querySelectorAll('.faq__list-wrapper');

let faqHeight = 0;


faqItems.forEach((item, index) => {
  item.addEventListener('mouseenter', () => {
    if (index % 2 ===0) {
      faqBtn[index].classList.toggle('btn__active');
    } else {
      faqBtn[index].classList.toggle('btn__active-purple');
    }
    item.addEventListener('mouseleave', () => {
      if (index % 2 ===0) {
        faqBtn[index].classList.remove('btn__active');
      } else {
        faqBtn[index].classList.remove('btn__active-purple');
      }
    });
  });
});


faqText.forEach(item => {
  if (faqHeight < item.scrollHeight) {
    faqHeight = item.scrollHeight;
  }
});


faqItems.forEach((item, index) =>{
  item.addEventListener('click', () => {
    for (let i = 0; i < faqItems.length; i++) {
      if (index === i) {
        faqText[i].style.height = faqItems[i].classList.contains('faq__active') ?
          '' : `${faqHeight}px`;
        faqItems[i].classList.toggle('faq__active');
      } else {
        faqItems[i].classList.remove('faq__active');
        faqText[i].style.height = '';
      }
    }
    index % 2 === 0 ? faqBtn[index].classList.toggle('btn__active-click') : faqBtn[index].classList.toggle('btn__active-purple-click');
  });
});
