  // Inicializa el carrusel dentro de un root (elemento DOM).
  // Devuelve una función de limpieza para borrar intervalos y listeners.
  export function initCarousel(root) {
    const container = root || document;

    function openFullscreen(card) {
      const video = card.querySelector && card.querySelector('video');
      if (!video) return;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen(); // Safari
      } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen(); // IE/Edge
      }
    }

    const slidesEl = container.querySelector('.carousel-holder');
    if (!slidesEl) {
      // nothing to do
      return () => {};
    }

    const slideNodes = container.querySelectorAll('.slide');
    const totalSlides = slideNodes.length || 0;
    let index = 0;

    function showSlide(i) {
      slidesEl.style.transform = `translateX(-${i * 100}%)`;
    }

    // Find arrows within the provided root; if not found, search globally as fallback
    const leftBtn = container.querySelector('.arrow.left') || document.querySelector('.arrow.left');
    const rightBtn = container.querySelector('.arrow.right') || document.querySelector('.arrow.right');

    const onLeft = () => {
      index = (index - 1 + totalSlides) % totalSlides;
      showSlide(index);
      resetAutoSlide();
    };

    const onRight = () => {
      index = (index + 1) % totalSlides;
      showSlide(index);
      resetAutoSlide();
    };

    if (leftBtn) leftBtn.addEventListener('click', onLeft);
    if (rightBtn) rightBtn.addEventListener('click', onRight);

    let autoSlide = null;
    if (totalSlides > 0) {
      autoSlide = setInterval(() => {
        index = (index + 1) % totalSlides;
        showSlide(index);
      }, 4000);
    }

    function resetAutoSlide() {
      if (autoSlide) clearInterval(autoSlide);
      autoSlide = setInterval(() => {
        index = (index + 1) % totalSlides;
        showSlide(index);
      }, 4000);
    }

    // Return cleanup
    return () => {
      if (leftBtn) leftBtn.removeEventListener('click', onLeft);
      if (rightBtn) rightBtn.removeEventListener('click', onRight);
      if (autoSlide) clearInterval(autoSlide);
    };
  }

  export default initCarousel;