import "./LoginPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <Header />
      <main className="centro">
        <div className="login-container">
          <h2 className="tittel_login">INICIAR SESIÓN</h2>
          <input
            className="ema"
            type="email"
            placeholder="CORREO ELECTRÓNICO"
            required
          />
          <input
            className="pas"
            type="password"
            placeholder="CONTRASEÑA"
            required
          />
          <button className="btn-ingresar">INGRESAR</button>
          <Link to="/src/VIEWS/registra.html" className="olvidar">
            Olvidé mi contraseña
          </Link>
          <Link to="/src/VIEWS/registra.html" className="ol">
            CREAR CUENTA
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default LoginPage;
