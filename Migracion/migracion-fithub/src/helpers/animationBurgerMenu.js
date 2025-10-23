    // Animación hamburguesa a X y menú deslizante
    // Inicializa la animación dentro de un root (DOM element) y devuelve una función de limpieza
    export function initBurgerAnimation(root) {
      const container = root || document;
      const menuToggle = container.querySelector('#menu-toggle') || document.getElementById('menu-toggle');
      const menuIcon = container.querySelector('.menu-icon') || document.querySelector('.menu-icon');
      const menu = container.querySelector('.menu') || document.querySelector('.menu');

      if (!menuToggle || !menuIcon || !menu) {
        return () => {};
      }

      const handler = function () {
        if (this.checked) {
          menuIcon.classList.add('open');
          menu.classList.add('slide-in');
        } else {
          menuIcon.classList.remove('open');
          menu.classList.remove('slide-in');
        }
      };

      menuToggle.addEventListener('change', handler);

      // cleanup
      return () => {
        menuToggle.removeEventListener('change', handler);
      };
    }

    export default initBurgerAnimation;