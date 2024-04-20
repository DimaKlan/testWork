// const btn = document.getElementsByClassName('btn');
// const slide = document.getElementsByClassName('for__slide');
// let sliderIndex = 0;

// [...btn].forEach(item => {
//     item.addEventListener('click', (e)=>{
//         [...btn].forEach(el=>{
//             el.classList.remove('active');
//             update()
//         })
//         item.classList.add('active')
//         update()
//     })
// });

// function update(){
// [...slide].forEach((slider, index) => {
//     if (index === sliderIndex) {
//       slider.style.display = 'flex';
//     } else {
//       slider.style.display = 'none';
//     }
//   });
// }
// update()


document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn')
    const slides = document.querySelectorAll('.for__slide')

    buttons.forEach(function (button, i) {

    button.addEventListener('click', function () {
      const currentIndex = i

      const currentActiveSlide = document.querySelector('.for__slide.active')
      currentActiveSlide.classList.remove('active')

      slides[currentIndex].classList.add('active')

      buttons.forEach(function (btn) {
       btn.classList.remove('active')
      })
      button.classList.add('active')

      let prevSlideIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : slides.length - 1

      const prevSlide = document.querySelector('.for__slide.prev')
      if (prevSlide) {
       prevSlide.classList.remove('prev')
      }

      slides[prevSlideIndex].classList.add('prev')
     })
    })
    buttons[0].classList.add('active')
    slides[0].classList.add('active')
    slides[1].classList.add('prev')
   })