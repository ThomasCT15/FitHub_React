import "./Home.css";
import Header from "../../components/Header";
import { useEffect, useRef, useCallback } from 'react';
import initCarousel from '../../helpers/carousel';
import Footer from "../../components/Footer";
import Video1 from '../../assets/VIDEOS/video1.mp4';
import Video2 from '../../assets/VIDEOS/video2.mp4';
import Video3 from '../../assets/VIDEOS/video3.mp4';
import { useNavigate } from 'react-router-dom'

function Home() {
  const carouselRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cleanup = initCarousel(carouselRef.current);
    return () => cleanup && cleanup();
  }, []);

  const goToRegister = useCallback(() => {
    window.location.href = '/registra';
  }, []);

  const openFullscreen = useCallback((card) => {
    if (!card) return;
    const video = card.querySelector && card.querySelector('video');
    if (!video) return;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="carousel-container" ref={carouselRef}>
        <div className="carousel-wrapper">
          <div className="carousel-holder">
            <div id="slide-1" className="slide"></div>
            <div id="slide-2" className="slide"></div>
            <div id="slide-3" className="slide"></div>
            <div id="slide-4" className="slide"></div>
          </div>
        </div>

        {/* Flechas de navegación  */}
        <button className="arrow left">&#10094;</button>
        <button className="arrow right">&#10095;</button>
      </div>
  <h1>Elegir Planes y <span className="diferent">Entra ¡YA!</span></h1>

  
    <section className="contenedor-cajas">
      <article className="caja">
        <h3>Plan Golden</h3>
        <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
        <p><strong>Desde</strong></p>
        <p><strong>$ 109.900/mes</strong></p>
        <button onClick={goToRegister}>¡Inscribete!</button>

  <div className="opciones">
          <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a más de 1.700 sedes de la red</label>
          <label><input type="checkbox" defaultChecked disabled /> Derecho a traer un invitado 5 veces al mes</label>
          <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a más de 1.700 sedes de la red</label>
          <label><input type="checkbox" defaultChecked disabled /> Derecho a traer un invitado 5 veces al mes</label>
        </div>
      </article>

      <article className="caja">
        <h3>Plan Platinum</h3>
        <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
        <p><strong>Desde</strong></p>
        <p><strong>$ 109.900/mes</strong></p>
        <button onClick={goToRegister}>¡Inscribete!</button>

  <div className="opciones">
          <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a más de 1.700 sedes de la red</label>
          <label><input type="checkbox" defaultChecked disabled /> Derecho a traer un invitado 5 veces al mes</label>
          <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a más de 1.700 sedes de la red</label>
        </div>
      </article>

      <article className="caja">
        <h3>Plan Diamond</h3>
        <p>Entrena en cualquiera de nuestras sedes en América Latina</p>
        <p><strong>Desde</strong></p>
        <p><strong>$ 109.900/mes</strong></p>
        <button onClick={goToRegister}>¡Inscribete!</button>

  <div className="opciones">
          <label><input type="checkbox" defaultChecked disabled /> Acceso ilimitado a más de 1.700 sedes de la red</label>
          <label><input type="checkbox" defaultChecked disabled /> Derecho a traer un invitado 5 veces al mes</label>
        </div>
      </article>
    </section>

    <h1>Activa <span className="diferent">tu mejor versión</span></h1>

    <div className="video-collage">
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video1} type="video/mp4" />
        </video>
        <div className="video-text">FUERZA</div>
      </div>
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="video-text">DISCIPLINA</div>
      </div>
      <div className="video-card" onClick={(e) => openFullscreen(e.currentTarget)}>
        <video autoPlay muted loop playsInline>
          <source src={Video3} type="video/mp4" />
        </video>
        <div className="video-text">ENERGÍA</div>
      </div>
    </div>
      <Footer />
    </div>
  );
}

export default Home;
