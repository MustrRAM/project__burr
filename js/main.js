const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () => {
  menu.classList.toggle('menu__list--active');
})



const swiper = new Swiper(".swiper", {
    effect: "fade",
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2700,
      disableOnInteraction:false,
    },
  });

  function onEntry(entry){
    entry.forEach(change => {
      if (change.isIntersecting){
        change.target.classList.add('element-show')
      }
    })
  }

  let options = {
    threshold:[0.5] };
  let observer = new
  IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('header')

  for(let elm of elements){
    observer.observe(elm)
  }