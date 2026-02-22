(function() {
  const init = () => {
    // Product Carousel
    const carousels = document.querySelectorAll('.products-carousel');
    carousels.forEach(carousel => {
      const track = carousel.querySelector('.products-track');
      const prevBtn = carousel.closest('section').querySelector('.carousel-prev');
      const nextBtn = carousel.closest('section').querySelector('.carousel-next');
      const cards = track.querySelectorAll('.product-card');
      let currentIndex = 0;
      const cardWidth = 288 + 24;
      const visibleCards = Math.floor(carousel.offsetWidth / cardWidth) || 1;
      const maxIndex = Math.max(0, cards.length - visibleCards);

      const updateCarousel = () => {
        track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      };

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentIndex = Math.max(0, currentIndex - 1);
          updateCarousel();
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          currentIndex = Math.min(maxIndex, currentIndex + 1);
          updateCarousel();
        });
      }
    });

    // Brands Marquee Animation
    const marqueeWrapper = document.querySelector('.brands-marquee');
    if (marqueeWrapper) {
      const slides = marqueeWrapper.querySelectorAll('.brands-slide');
      let offset = 0;
      const speed = 0.5;

      const animateMarquee = () => {
        offset -= speed;
        const slideWidth = slides[0].offsetWidth + 64;
        if (Math.abs(offset) >= slideWidth) {
          offset = 0;
        }
        marqueeWrapper.style.transform = `translateX(${offset}px)`;
        requestAnimationFrame(animateMarquee);
      };

      animateMarquee();
    }

    // Checkbox styling
    const checkboxes = document.querySelectorAll('.input-checkbox-05');
    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        const svg = this.parentElement.querySelector('svg');
        if (this.checked) {
          svg.classList.remove('hidden');
        } else {
          svg.classList.add('hidden');
        }
      });
    });

    // Radio button styling
    const radioGroups = {};
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
      const name = radio.getAttribute('name');
      if (!radioGroups[name]) {
        radioGroups[name] = [];
      }
      radioGroups[name].push(radio);

      radio.addEventListener('change', function() {
        radioGroups[name].forEach(r => {
          const svg = r.parentElement.querySelector('svg');
          if (r.checked) {
            svg.classList.remove('hidden');
          } else {
            svg.classList.add('hidden');
          }
        });
      });

      if (radio.checked) {
        const svg = radio.parentElement.querySelector('svg');
        if (svg) svg.classList.remove('hidden');
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();