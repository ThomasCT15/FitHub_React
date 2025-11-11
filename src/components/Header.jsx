import './Header.css';
import Logo from '../assets/IMG/logos/LogoFinal.png';
import { useCallback } from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom'

function Header() {
  const goToRegister = useCallback(() => {
    // usa rutas relativas a la app; ajusta según tu enrutador si usas react-router
    window.location.href = '/register';
  }, []);

  return (
    <header>
      <a href="/">
        <img className="imageicon" src={Logo} alt="Logo Img" />
      </a>

      <nav className="nav-main">
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/sedes" className="Pet1">sedes</Link>
          </li>
          <li className="nav-item">
            <Link to="/plans" className="Pet1">Planes</Link>
          </li>
          <li className="nav-item">
            <Link to="/promociones" className="Pet1">Promociones</Link>
          </li>
          <li className="nav-item">
            <Link to="/us" className="Pet1">Quienes somos</Link>
          </li>
          <li className="nav-item">
            <button className="btn-inscribete" onClick={goToRegister}>¡Inscríbete!</button>
          </li>
          <li className="nav-item">
            <BurgerMenu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;