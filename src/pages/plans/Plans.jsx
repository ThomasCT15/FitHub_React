import './Plans.css';
import Header from "../../components/Header";
import { useEffect, useCallback } from 'react';
import Footer from "../../components/Footer";
import { useNavigate } from 'react-router-dom';

function Plans() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const goToRegister = useCallback(() => {
    navigate('/register');
  }, [navigate]);
  return (
    <div>
      <Header />

      <h1 className="plans-title">Elige tu plan y <span className="plans-diferent">¡Comienza Ya!</span></h1>

      <section className="contenedor-cajas">
        <article className="cajaHome">
          <div className="plan-content">
            <h3>Plan Golden</h3>
            <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
            <p><strong>Desde</strong></p>
            <p><strong>$ 109.900/mes</strong></p>

            <div className="opciones">
              <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a todas las sedes estándar</label>
              <label><input type="checkbox" defaultChecked disabled /> Clases grupales de cardio y musculación</label>
              <label><input type="checkbox" defaultChecked disabled /> Locker personal en horario de entrenamiento</label>
            </div>
          </div>
          <button className="buttonPlan" onClick={goToRegister}>¡INSCRIBETE!</button>
        </article>

        <article className="cajaHome">
          <div className="plan-content">
            <h3>Plan Platinum</h3>
            <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
            <p><strong>Desde</strong></p>
            <p><strong>$ 149.900/mes</strong></p>

            <div className="opciones">
              <label><input type="checkbox" defaultChecked disabled /> Todo lo del Plan Golden</label>
              <label><input type="checkbox" defaultChecked disabled /> Acceso a zona de spa y saunas</label>
              <label><input type="checkbox" defaultChecked disabled /> Evaluación física mensual</label>
              <label><input type="checkbox" defaultChecked disabled /> Derecho a traer un invitado 5 veces al mes</label>
              <label><input type="checkbox" defaultChecked disabled /> Acceso preferente a clases de alta demanda</label>
            </div>
          </div>
          <button className="buttonPlan" onClick={goToRegister} >¡INSCRIBETE!</button>
        </article>

        <article className="cajaHome">
          <div className="plan-content">
            <h3>Plan Diamond</h3>
            <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
            <p><strong>Desde</strong></p>
            <p><strong>$ 199.900/mes</strong></p>

            <div className="opciones">
              <label><input type="checkbox" defaultChecked disabled /> Todo lo del Plan Platinum</label>
              <label><input type="checkbox" defaultChecked disabled /> Asesoría personalizada con entrenador elite</label>
              <label><input type="checkbox" defaultChecked disabled /> Plan de nutrición profesional</label>
              <label><input type="checkbox" defaultChecked disabled /> Acceso VIP a zonas exclusivas y piscina</label>
              <label><input type="checkbox" defaultChecked disabled /> Una tarro de 500gr de proteina</label>
              <label><input type="checkbox" defaultChecked disabled /> Kit de bienvenida premium</label>
            </div>
          </div>
          <button className="buttonPlan" onClick={goToRegister} >¡INSCRIBETE!</button>
        </article>
      </section>
      <Footer />
    </div>
  )
}

export default Plans;