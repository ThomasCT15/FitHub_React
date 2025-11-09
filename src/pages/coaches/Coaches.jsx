import "./Coaches.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LogoFitHub from "../../assets/IMG/logos/LogoFinal.png";
import ImgJuan from "../../assets/IMG/6aa76cca9f2a4ce7458902851b89e1b0.jpg";
import ImgMaria from "../../assets/IMG/e00a2ba46f7b651106890dd4f8845fde.jpg";
import ImgCarlos from "../../assets/IMG/4614174eeea1ebdc8348cd3691dd07bd.jpg";
import ImgSofia from "../../assets/IMG/0c808d71a7bf20730dcd6a63d059dc9f.jpg";
import ImgDavid from "../../assets/IMG/488470220cdbdd72f73405d473a2e8f6.jpg";
import ImgLaura from "../../assets/IMG/a5486e5ceec98dc2eb463c447ff86994.jpg";

function Coaches() {
  return (
    <div>
      <Header />
      <section className="catalogo-entrenadores">
        <h1>Nuestros <span>Entrenadores</span></h1>

        <div className="entrenador">
          <img src={ImgJuan} alt="Entrenador Juan Pérez" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />
        
          <div className="info">
            <h2>Juan Pérez</h2>
            <p><strong>Especialidad:</strong> CrossFit y Fuerza</p>
            <p><strong>Horario:</strong> 06:00 AM - 12:00 PM</p>
            <p className="bio">
              Con más de 8 años de experiencia en entrenamiento funcional, Juan se enfoca en mejorar la fuerza y resistencia de sus alumnos. Su pasión es ver a las personas superar sus propios límites.
            </p>
          </div>
        </div>

        <div className="entrenador">
          <img src={ImgMaria} alt="Entrenadora María López" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />

          <div className="info">
            <h2>María López</h2>
            <p><strong>Especialidad:</strong> Yoga y Pilates</p>
            <p><strong>Horario:</strong> 10:00 AM - 04:00 PM</p>
            <p className="bio">
              Instructora certificada en yoga y pilates, María ayuda a equilibrar cuerpo y mente mediante técnicas de respiración y flexibilidad. Ideal para quienes buscan bienestar integral.
            </p>
          </div>
        </div>

        <div className="entrenador">
          <img src={ImgCarlos} alt="Entrenador Carlos Gómez" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />

          <div className="info">
            <h2>Carlos Gómez</h2>
            <p><strong>Especialidad:</strong> Cardio y Entrenamiento Funcional</p>
            <p><strong>Horario:</strong> 02:00 PM - 08:00 PM</p>
            <p className="bio">
              Carlos se especializa en mejorar la resistencia cardiovascular y el rendimiento físico. Sus clases son intensas, dinámicas y adaptadas a todos los niveles.
            </p>
          </div>
        </div>

        <div className="entrenador">
          <img src={ImgSofia} alt="Entrenadora Sofía Ramírez" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />
          
          <div className="info">
            <h2>Sofía Ramírez</h2>
            <p><strong>Especialidad:</strong> Zumba y Baile Fitness</p>
            <p><strong>Horario:</strong> 08:00 AM - 02:00 PM</p>
            <p className="bio">
              Sofía combina el ritmo y la energía del baile con ejercicios de tonificación. Sus clases son alegres, motivadoras y perfectas para quemar calorías mientras te diviertes.
            </p>
          </div>
        </div>

        <div className="entrenador">
          <img src={ImgDavid} alt="Entrenador David Torres" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />
          
          <div className="info">
            <h2>David Torres</h2>
            <p><strong>Especialidad:</strong> Calistenia y Street Workout</p>
            <p><strong>Horario:</strong> 03:00 PM - 09:00 PM</p>
            <p className="bio">
              Apasionado por el entrenamiento con peso corporal, David te enseña a dominar tu propio cuerpo. Su enfoque está en la técnica, la fuerza y la disciplina.
            </p>
          </div>
        </div>

        <div className="entrenador">
          <img src={ImgLaura} alt="Entrenadora Laura Medina" />
          
          <img src={LogoFitHub} alt="Logo FitHub" className="logo-entrenador" />
          
          <div className="info">
            <h2>Laura Medina</h2>
            <p><strong>Especialidad:</strong> Spinning y Resistencia</p>
            <p><strong>Horario:</strong> 05:00 AM - 11:00 AM</p>
            <p className="bio">
              Laura transforma cada clase de spinning en una experiencia motivadora. Su energía contagiosa y playlists únicas hacen que no quieras bajarte de la bici.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Coaches;
