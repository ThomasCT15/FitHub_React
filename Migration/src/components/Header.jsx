import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;