function simpleSlider() {
  document.createElement('sliderContainer');
  document.createElement('slide');

  const slider = document.getElementsByTagName('sliderContainer');
  const singleSlide = document.querySelectorAll('slide');
  slider[0].classList.add('sliderContainer');

  const slideContainer = document.querySelector('.sliderContainer');

  singleSlide.forEach((slide) => slide.classList.add('slide'));

  const slides = document.querySelectorAll('.slide');



  slideContainer.style.position = 'relative';
  slideContainer.style.display = 'block';
  slideContainer.style.overflow = 'hidden';
  slideContainer.style.margin = '0 auto';
  slideContainer.style.width = '600px';
  slideContainer.style.height = '600px';

  slides.forEach((slide, slideIndex) => {
    const img = slide.getElementsByTagName('img')
   
    img[0].style.objectFit = "cover";
    img[0].style.width = '100%';
    img[0].style.height = '100%';
 
    let position = 'next';

    if (slideIndex === 0) {
      position = 'active';
    }
    if (slideIndex === slides.length - 1) {
      position = 'last';
    }
    if (slides <= 1) {
      position = 'active';
    }
    slide.classList.add(position);

    slide.style.position = 'absolute';
    slide.style.left = '0';
    slide.style.top = '0';
    slide.style.width = '100%';
    slide.style.height = '100%';
    slide.style.transition = 'all 0.3s ease-in-out';
    slide.style.opacity = '0';

    if (slide.classList.contains('active')) {
      slide.style.opacity = '1';
    }
  });

  let arrow = true;
  let autoSlide = false;
  let arrowSize = '5';
  let arrowWeight = '5';

  if (slides.length) {
    window.onload = function () {
// TODO ARROW NOT WORKING ON LOAD
      // set arrow color
      let arrowColor = 'black'
      if (!slideContainer.attributes.color) {
        arrowColor = 'black';
      } else {
        arrowColor = slideContainer.attributes.color.value;
      }

      // set auto autoSlide

      if (!slideContainer.attributes.autoSlide) {
        autoSlide = false;
      } else if (slideContainer.attributes.autoSlide.value === 'true') {
        console.log(slideContainer.attributes.autoSlide.value);
        autoSlide = true;
      }

      if (slideContainer) {
        const leftArrow = document.createElement('span');
        const rightArrow = document.createElement('span');
        slideContainer.appendChild(leftArrow);
        slideContainer.appendChild(rightArrow);

        rightArrow.classList.add(['arrow'], ['arrow-right']);
        leftArrow.classList.add(['arrow'], ['arrow-left']);

        // set arrow size
        if (!slideContainer.attributes.arrowSize) {
          arrowSize = '5';
        } else if (
          slideContainer.attributes.arrowSize &&
          slideContainer.attributes.arrowSize.value > 5
        ) {
          arrowSize = '5';
        } else {
          arrowSize = slideContainer.attributes.arrowSize.value;
        }

        rightArrow.style.border = `solid ${arrowColor}`;
        rightArrow.style.width = `${arrowSize}0px`;
        rightArrow.style.height = `${arrowSize}0px`;
        rightArrow.style.borderWidth = `0 ${arrowWeight}px ${arrowWeight}px 0`;
        rightArrow.style.display = 'inline-block';
        rightArrow.style.padding = '3px';
        rightArrow.style.transform = 'rotate(-45deg) translateY(-50%)';
        rightArrow.style.position = 'absolute';
        rightArrow.style.top = '50%';
        rightArrow.style.right = '0';

        leftArrow.style.border = `solid ${arrowColor}`;
        leftArrow.style.width = `${arrowSize}0px`;
        leftArrow.style.height = `${arrowSize}0px`;
        leftArrow.style.borderWidth = `0 ${arrowWeight}px ${arrowWeight}px 0`;
        leftArrow.style.display = 'inline-block';
        leftArrow.style.padding = '3px';
        leftArrow.style.transform = 'rotate(135deg) translateX(-50%)';
        leftArrow.style.position = 'absolute';
        leftArrow.style.top = '50%';
        leftArrow.style.left = '0';

        // show arrow
        if (!slideContainer.attributes.arrow) {
          rightArrow.style.display = 'block';
          leftArrow.style.display = 'block';
        } else if (slideContainer.attributes.arrow.value === 'false') {
          rightArrow.style.display = 'none';
          leftArrow.style.display = 'none';
        }

        const startSlider = (type) => {
          // get all three slides active,last next
          const active = document.querySelector('.active');
          const last = document.querySelector('.last');

          let next = active.nextElementSibling;
          if (!active.nextElementSibling.classList.contains('slide')) {
            next = slideContainer.firstElementChild;
          }
          active.classList.remove('active');
          last.classList.remove('last');
          next.classList.remove('next');

          if (type === 'prev') {
            active.classList.add('next');
            last.classList.add('active');
            next = last.previousElementSibling;

            if (!next) {
              next =
                slideContainer.lastElementChild.previousElementSibling
                  .previousElementSibling;
            }

            next.classList.remove('next');
            next.classList.add('last');
            return;
          }
          active.classList.add('last');
          last.classList.add('next');
          next.classList.add('active');
        };
        rightArrow.addEventListener('click', () => {
          startSlider();
          // if (autoSlide) {
          //   resetInterval();
          // }
          slides.forEach((slide) => {
            if (slide.classList.contains('active')) {
              slide.style.opacity = '1';
              slide.style.transform = 'translateX(0)';
            }
            if (slide.classList.contains('next')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(100%)';
            }
            if (slide.classList.contains('last')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(-100%)';
            }
          });
        });
        leftArrow.addEventListener('click', () => {
          startSlider('prev');
          // if (autoSlide) {
          //   resetInterval();
          // }
          slides.forEach((slide) => {
            if (slide.classList.contains('active')) {
              slide.style.opacity = '1';
              slide.style.transform = 'translateX(0)';
            }
            if (slide.classList.contains('next')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(100%)';
            }
            if (slide.classList.contains('last')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(-100%)';
            }
          });
        });

        if (autoSlide) {

           function autoSlides() {
            startSlider();
             slides.forEach((slide) => {
              if (slide.classList.contains('active')) {
                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';
              }
              if (slide.classList.contains('next')) {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(100%)';
              }
              if (slide.classList.contains('last')) {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(-100%)';
              }
            });
          }

          console.log('man');
          let interval = setInterval(function () {
            autoSlides();
            slides.forEach((slide) => {
              if (slide.classList.contains('active')) {
                slide.style.opacity = '1';
                slide.style.transform = 'translateX(0)';
              }
              if (slide.classList.contains('next')) {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(100%)';
              }
              if (slide.classList.contains('last')) {
                slide.style.opacity = '0';
                slide.style.transform = 'translateX(-100%)';
              }
            });
          }, 3000);

           rightArrow.addEventListener('click', () => {
          startSlider();
          if (autoSlide) {
            resetInterval();
          }
          slides.forEach((slide) => {
            if (slide.classList.contains('active')) {
              slide.style.opacity = '1';
              slide.style.transform = 'translateX(0)';
            }
            if (slide.classList.contains('next')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(100%)';
            }
            if (slide.classList.contains('last')) {
              slide.style.opacity = '0';
              slide.style.transform = 'translateX(-100%)';
            }
          });
        });
        leftArrow.addEventListener('click', () => {
          startSlider('prev');
          if (autoSlide) {
            resetInterval();
          }
          // slides.forEach((slide) => {
          //   if (slide.classList.contains('active')) {
          //     slide.style.opacity = '1';
          //     slide.style.transform = 'translateX(0)';
          //   }
          //   if (slide.classList.contains('next')) {
          //     slide.style.opacity = '0';
          //     slide.style.transform = 'translateX(100%)';
          //   }
          //   if (slide.classList.contains('last')) {
          //     slide.style.opacity = '0';
          //     slide.style.transform = 'translateX(-100%)';
          //   }
          // });
        });

           function resetInterval() {
            clearInterval(interval);
            interval = setInterval(function () {
              autoSlides();
            }, 3000);
          }
          
        }
        
      }
    };
  }
}

// simpleSlider();

export default simpleSlider = simpleSlider;
