import './us.css'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import imgGym3 from "../../assets/IMG/IMAGEN3 GYM.jpg";
import estiramiento from "../../assets/IMG/logos/estiramiento.png";
import mapa from "../../assets/IMG/logos/mapa.png";
import verificado from "../../assets/IMG/logos/verificado.png";

function Us() {
  return (
    <div>
      <Header />
      <main>
        <img className="imgqs" src={imgGym3} alt="" />
      </main>

      <section className="description">
        <article className="card">
          <img className="logosqs check" src={verificado} alt="" />
          <h2 className="title_card">Facilidades</h2>
          <p>
            Pensando en tu comodidad, contamos con diferentes servicios en linea
            como inscripción rápida, agendamiento de citas, transferencia de
            sedes y cambio de plan. Además del acompañamiento de nuestros
            profesores de planta, tendrás acceso a nuestra App para que entrenes
            de forma autónoma con tu entrenador virtual
          </p>
        </article>
        <article className="card">
          <img className="logosqs map" src={mapa} alt="" />
          <h2 className="title_card">Presencia</h2>
          <p>
            Entrena cuando quieras y donde quieras. Queremos que siempre exista
            un xxxxxxxxxxx cerca de ti, por eso contamos actualmente con más de
            20 Centros de Acondicionamiento y Preparación Física - CAPF - en
            Colombia y más de 150 en todo Latinoamérica, en países como Brasil,
            Chile, México, República Dominicana, Panamá, Perú y Ecuador.
          </p>
        </article>
        <article className="card">
          <img className="logosqs" src={estiramiento} alt="" />
          <h2 className="title_card">Accesibilidad</h2>
          <p>
            Nuestra misión es entregar fitness de alta calidad, haciéndolo
            accesible para todos. Es por eso que todos nuestros Centros de
            Acondicionamiento y Preparación Física - CAPF cuentan con la
            tecnología e instalaciones aecuadas para satisfacer las necesidades
            de nuestros usuarios.
          </p>
        </article>
      </section>
      <Footer />
    </div>
  );
}
export default Us;
