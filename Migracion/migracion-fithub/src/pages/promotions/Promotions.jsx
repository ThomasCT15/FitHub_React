import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Promotions.css';
import { useCallback } from 'react';
import Img2 from '../../assets/IMG/IMAGEN2 GYM.jpg';
import Img7 from '../../assets/IMG/imaGEN7 GYM.jpg';
import ImgWoman from '../../assets/IMG/mujer-sosteniendo-pesas-cerca-de-pesas.jpg';
import ImgArm from '../../assets/IMG/brazo-de-entrenamiento-culturista-con-banda-de-resistencia.jpg';

function Promotions() {
  const goToRegister = useCallback(() => {
    window.location.href = '/registra';
  }, []);

  return (
    <div>
      <Header />
      <section className="po">
        <h1>!NO LO PIENSES MÁS!</h1>
      </section>

<section>
    <p>Elige una de nuestras Promos xxxxxxx vigentes, inscríbete ya y vive la mejor experiencia
fitness de Latinoamérica; tenemos beneficios especiales y descuentos que se
acomodan a tus posibilidades. Conoce todas nuestras super
promociones y los beneficios que tenemos para ti:</p>
</section>
      <main>
        <div>
          <h2>Promociones</h2>
          <div className="bo">
            <div className="row">
              <div className="caja">
                <img className="img-responsive" src={Img2} alt="Strong Season" />
                <h3>Strong Season</h3>
                <p className="dates">25 Jun 2025 - 01 Jul 2025</p>
                <p className="desc">Entrena ahora y paga en julio. Aplica en planes y sedes seleccionadas.</p>
                <ul className="benefits">
                  <li>Acceso ilimitado a sedes participantes</li>
                  <li>Descuento en membresías familiares</li>
                  <li>Sesión de orientación gratuita</li>
                </ul>
                <p className="price"><strong>Desde $99.900/mes</strong></p>
                <button onClick={goToRegister} className="cta">¡Inscríbete!</button>
              </div>

              <div className="caja">
                <img className="img-responsive" src={Img7} alt="Fit Friend (2025)" />
                <h3>Fit Friend (2025)</h3>
                <p className="dates">29 May 2025 - 25 Dic 2025</p>
                <p className="desc">Trae a tu amigo y ambos obtienen beneficios. Promoción por tiempo limitado.</p>
                <ul className="benefits">
                  <li>2x1 en inscripción durante la promo</li>
                  <li>Acceso a clases grupales</li>
                  <li>Plan de entrenamiento personalizado</li>
                </ul>
                <p className="price"><strong>Desde $79.900/mes</strong></p>
                <button onClick={goToRegister} className="cta">¡Inscríbete!</button>
              </div>
            </div>

            <div className="row">
              <div className="caja">
                <img className="img-responsive" src={ImgWoman} alt="Full Power" />
                <h3>Full Power</h3>
                <p className="dates">Sep 2025 – 31 Ene 2026</p>
                <p className="desc">Entrena ahora y paga en octubre. Perfecto para quienes buscan máxima intensidad.</p>
                <ul className="benefits">
                  <li>Clases de fuerza y acondicionamiento</li>
                  <li>Acceso a aparatos premium</li>
                </ul>
                <p className="price"><strong>Desde $129.900/mes</strong></p>
                <button onClick={goToRegister} className="cta">¡Inscríbete!</button>
              </div>

              <div className="caja">
                <img className="img-responsive" src={ImgArm} alt="Summer Pass (2025)" />
                <h3>Summer Pass (2025)</h3>
                <p className="dates">01 Jun 2025 – 31 Ago 2025</p>
                <p className="desc">Accede a entrenamientos especiales de verano y mejoras en resistencia.</p>
                <ul className="benefits">
                  <li>Entrenamientos al aire libre</li>
                  <li>Clases especiales de temporada</li>
                </ul>
                <p className="price"><strong>Desde $59.900/mes</strong></p>
                <button onClick={goToRegister} className="cta">¡Inscríbete!</button>
              </div>
            </div>

            <div className="row">
              <div className="caja">
                <img className="img-responsive lastimage" src="https://i.pinimg.com/736x/ab/d8/3c/abd83c0c608b674bf410b955612f6de6.jpg" alt="Winter Pass (2025)" />
                <h3>Winter Pass (2025)</h3>
                <p className="dates">01 Dic 2025 – 28 Feb 2026</p>
                <p className="desc">Entrena ahora y paga en enero. Aplica en planes y sedes seleccionadas.</p>
                <ul className="benefits">
                  <li>Acceso a clases especiales de invierno</li>
                  <li>Ofertas en planes anuales</li>
                </ul>
                <p className="price"><strong>Desde $89.900/mes</strong></p>
                <button onClick={goToRegister} className="cta">¡Inscríbete!</button>
              </div>

              <div className="caja placeholder">
                <div className="placeholder-content">
                  <h3>¿Quieres más promos?</h3>
                  <p>Contáctanos o regístrate para recibir alertas de nuevas promociones y descuentos exclusivos.</p>
                  <button onClick={goToRegister} className="cta">¡Quiero ofertas!</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Promotions;
