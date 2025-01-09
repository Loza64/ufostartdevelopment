import Lenguajes from "../Lenguajes";
import Banner from "../Banner";
import AboutUs from "../about/AboutUs";
import Footer from "../Footer";
import { useEffect } from "react";

export default function Nosotros() {

  useEffect(() => {
    document.title = "UFOSTART DEVELOPMENT | Nosotros"
  }, [])

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <header className='header-about'>
        <h1>
          ¿Que es ufostart development?
        </h1>
        <p>
          En Ufostart Development, llevamos tu negocio a otro mundo. Nos especializamos en crear aplicaciones web y
          de escritorio que no solo destacan por su diseño extraordinario, sino también por su funcionalidad y usabilidad.
          Utilizando las tecnologías más avanzadas del mercado, nuestro equipo apasionado y dedicado transforma tus ideas
          en soluciones impactantes que no solo elevan la presencia de tu marca, sino que también impulsan el éxito y el
          crecimiento de tu empresa. Cada proyecto que emprendemos es una colaboración creativa donde escuchamos tus
          necesidades y trabajamos incansablemente para materializar tu visión. Juntos, haremos que tu idea despegue y
          alcance nuevas galaxias, brindándote resultados tangibles que marcan la diferencia. En Ufostart Development,
          tu éxito es nuestra misión.
        </p>
      </header>
      <div className="cofounder">
        <h2 className="">Fundador</h2>
        <div className="content">
          <div className="image">
            <img src="https://res.cloudinary.com/ufostart-development/image/upload/v1691528304/UFOSTARTIMG/sdxs0isakedomfodmhow.jpg" alt="foto" />
          </div>
          <div className="details">
            <p>
              ¡Hola! Soy Roberto Loza, un apasionado estudiante de ingeniería informática en la Universidad Centroamericana
              José Simeón Cañas de El Salvador. Como desarrollador de software full stack, me especializo en crear páginas web,
              aplicaciones de escritorio y soluciones móviles que no solo cumplen con las expectativas, sino que las superan.
              Cada proyecto que realizo es el reflejo de mi dedicación y compromiso, donde pongo todo mi empeño y corazón para
              transformar ideas en realidades extraordinarias.

              Si deseas conocer más sobre mi trayectoria, habilidades y proyectos que he llevado a cabo, te invito a visitar
              mi perfil de LinkedIn. Allí encontrarás información detallada que te mostrará cómo puedo contribuir al éxito de
              tu próximo proyecto. ¡Espero conectar contigo pronto!
            </p>
            <a href="#" onClick={() => { window.open("https://www.linkedin.com/in/roberto-loza-257542221/") }}>Ver linkedin</a>
          </div>
        </div>
      </div>
      <AboutUs Title={"Acerca de nosotros"} />
      <Lenguajes title={"Implemetaciones Tecnológicas de Vanguardia"} />
      <Banner />
      <Footer />
    </>
  )
}