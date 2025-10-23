import './BurgerMenu.css';
import Logo from '../assets/IMG/logos/LogoFinal.png';
import UsuarioImg from '../assets/IMG/logos/Usuario.png';
import { useCallback, useEffect, useRef } from 'react';
import initBurgerAnimation from '../helpers/animationBurgerMenu';

function BurgerMenu() {
    const goToRegister = useCallback(() => {
        // usa rutas relativas a la app; ajusta según tu enrutador si usas react-router
        window.location.href = '/registra';
      }, []);

  const menuRef = useRef(null);

  useEffect(() => {
    const cleanup = initBurgerAnimation(menuRef.current);
    return () => cleanup && cleanup();
  }, []);

  return (
  <aside className="menu-container" ref={menuRef}>
      <input type="checkbox" id="menu-toggle" />

      <label className="menu-overlay" htmlFor="menu-toggle"></label>
      <label className="menu-icon" htmlFor="menu-toggle">
        <span className="bar1"></span>
        <span className="bar2"></span>
        <span className="bar3"></span>
      </label>
      <nav className="menu">
        <label className="close-button" htmlFor="menu-toggle">X</label>
        <img src={Logo} alt="" />

        <div className="ImgUser">
          <img src={UsuarioImg} alt="User" />
          <a id="User" href="/login">usuarios</a>
          <a id="number" href="/login"><span style={{ color: '#868686' }}>1.152.224.905</span></a>
        </div>

        <a href="/sedes">Sedes</a>
        <a href="/promociones">Promociones</a>
        <a href="/quienes">Quienes Somos</a>
        <button onClick={goToRegister}>¡Inscríbete!</button>
      </nav>
    </aside>
  );
}
export default BurgerMenu;