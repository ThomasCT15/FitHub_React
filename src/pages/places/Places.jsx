import Footer from "../../components/Footer";
import Header from "../../components/Header";
import './Places.css';
import { useCallback } from 'react';
import Img5 from '../../assets/IMG/IMAGEN5 GYM.jpg';
import Img4 from '../../assets/IMG/IMAGEN4 GYM.jpg';
import Img6 from '../../assets/IMG/IMAGEN6 GYM.jpg';
import ImgArk from '../../assets/IMG/Gym Interior Projects __ Photos, videos, logos, illustrations and branding.jpeg';
import ImgPurple from '../../assets/IMG/purple goated 🫡.jpeg';
import ImgGymFav from '../../assets/IMG/The Gym! My fav place.jpeg';
import ImgPalestra from '../../assets/IMG/Fitness Club PALESTRA.jpeg';
import ImgGrunge from '../../assets/IMG/GYM DESIGN _ GRUNGE _ STRENGTH EQUIPMENT.jpeg';

function Places() {
  return (
    <div>
      <Header />
            <div className="contenedor">
                <article className="caja">
                      <img src={Img5} alt="Floresta" />
                    <h2>Floresta</h2>
                    <p>Carrera 67A, #95-63 - Floresta, Bogotá - D.C.</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={Img4} alt="Calle 116 Pepe Sierra" />
                    <h2>Calle 116 Pepe Sierra</h2>
                    <p>Carrera 67A, #95-63 - Floresta, Bogotá - D.C.</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={Img6} alt="Jumbo Calle 80" />
                    <h2>Jumbo Calle 80</h2>
                    <p>Carrera 67A, #95-63 - Floresta, Bogotá - D.C.</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={ImgArk} alt="Arkadia" />
                    <h2>Arkadia</h2>
                    <p>C.C. Arkadia, Carrera 80 # 1–9, La Mota, Medellín.</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={ImgPurple} alt="La América" />
                    <h2>La América</h2>
                    <p>Carrera 81 # 43–6, La América, Medellín</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={ImgGymFav} alt="Santafé Medellín" />
                    <h2>Santafé Medellín</h2>
                    <p>Carrera 43A # 7 Sur – 170, El Poblado, Medellín</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={ImgPalestra} alt="Hayuelos" />
                    <h2>Hayuelos</h2>
                    <p>Avenida Carrera 86 # 19A-50, Bogotá, D.C.</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>

                <article className="caja">
                      <img src={ImgGrunge} alt="Calle 167" />
                    <h2>Calle 167</h2>
                    <p>Calle 167 # 62-48, Bogotá, D.C</p>
                    <button onClick={() => window.location.href = '/registra'}>¡Inscribete ya!</button>
                </article>
            </div>
      <Footer />
    </div>
  );
}
export default Places;
