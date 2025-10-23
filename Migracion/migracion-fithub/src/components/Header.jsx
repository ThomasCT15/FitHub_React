import './Header.css';
import Logo from '../assets/IMG/logos/LogoFinal.png';
import { useCallback } from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom'

function Header() {
  const goToRegister = useCallback(() => {
    // usa rutas relativas a la app; ajusta según tu enrutador si usas react-router
    window.location.href = '/registra';
  }, []);

  return (
    <header>
      <a href="/">
        <img className="imageicon" src={Logo} alt="Logo Img" />
      </a>

      <nav className="nav-main">
        <ul className="nav-links">
          <li>
            <Link to="/sedes" className="Pet1">sedes</Link>
          </li>
          <li>
            <Link to="/promociones" className="Pet1">Promociones</Link>
          </li>
          <li>
            <Link to="/us" className="Pet1">Quienes somos</Link>
          </li>
          <li>
            <button className="btn-inscribete" onClick={goToRegister}>¡Inscríbete!</button>
          </li>
          <li>
            <BurgerMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;