import React from "react";
import "./loginPage.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function LoginPage() {
    return (
        <div>
            <Header />
            <main class="centro">
    <div class="login-container">
      <h2>INICIAR SESIÓN</h2>
      <input class ="ema" type="email" placeholder="CORREO ELECTRÓNICO" required>
      <input  class ="pas" type="password" placeholder="CONTRASEÑA" required>
      <button class="btn-ingresar">INGRESAR</button>
      <a href="/src/VIEWS/registra.html" class="olvidar">Olvidé mi contraseña</a>
     <a href="/src/VIEWS/registra.html" class="ol">CREAR CUENTA</a>

    </div>
    </main>
            <Footer />
        </div>
    );
}

export default LoginPage;

