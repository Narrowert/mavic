const menu = document.querySelector('.menu');
const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 40,
  
    navigation: {
      nextEl: '.about-btn__next',
      prevEl: '.about-btn__prev',
    },
  
  });

  console.log(typeof(function f(){return "42";}, function g(){return 42;})());

  document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
  
    accordions.forEach(el => {
      el.addEventListener('click', (e) => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');
  
        self.classList.toggle('open');
  
        // если открыт аккордеон
        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;
        }
      });
    });
  });

  document.querySelector('.burger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('burger--active');
    menu.classList.toggle('menu--active');
  });

