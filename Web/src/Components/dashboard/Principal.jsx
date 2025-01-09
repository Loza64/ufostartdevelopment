import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';
import Lenguajes from "../Lenguajes";
import ServicioList from "../services/ServicioList";
import Banner from "../Banner";
import OurProjects from "../projects/OurProjects";
import AboutUs from "../about/AboutUs";
import Footer from '../Footer'
import { useEffect } from 'react';

export default function Principal() {

  const scrollBottom = () => {
    window.scrollTo({
      top: 640,
      behavior: "smooth",
    });
  }

  useEffect(()=>{
    document.title = "UFOSTART DEVELOPMENT | Inicio"
  },[])

  return (
    <>
      <header className='header-dashboard'>
        <h1>
          Estamos listos para apoyarte y brindarte todo lo que necesites para llevar tu negocio al siguiente nivel.
        </h1>
        <p>
          En UFOSTART, somos una empresa de desarrollo de software especializada en aplicaciones web y de escritorio. Utilizamos las tecnologías más avanzadas y las metodologías más efectivas del momento, junto con estrategias innovadoras de publicidad y marketing.
          Nuestro compromiso es poner corazón y esfuerzo en cada proyecto, ofreciendo calidad y diseños excepcionales que harán volar tu imaginación. ¡Juntos, lograremos resultados verdaderamente positivos para tu negocio!
        </p>
        <Link to="/Nosotros" className="btn-link">Ver mas información</Link>
        <FaChevronDown onClick={scrollBottom} className="btn-scroll" />
      </header>
      <ServicioList Title={"nuestros servicios"} items={3}/>
      <AboutUs Title={"Acerca de ufostart"} items={3}/>
      <OurProjects />
      <Lenguajes title={"Tecnologías que se ocupan"} />
      <Banner />
      <Footer />
    </>
  )
}