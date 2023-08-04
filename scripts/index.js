const faqItems = document.querySelectorAll('.faq__list-item');
const faqBtn = document.querySelectorAll('.faq__btn');
const faqText = document.querySelectorAll('.faq__list-wrapper');

let faqHeight = 0;


faqText.forEach(item => {
  if (faqHeight < item.scrollHeight) {
    faqHeight = item.scrollHeight;
  }
});


faqBtn.forEach((btn, index) =>{
  btn.addEventListener('click', () => {
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
  });
});


