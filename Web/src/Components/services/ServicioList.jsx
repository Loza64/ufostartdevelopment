import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaCodeBranch, FaComments, FaDesktop, FaLink, FaSearch, FaShoppingCart, FaTools } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineTabletAndroid } from "react-icons/md";
import { SiWebmoney } from "react-icons/si";

ServicioList.propTypes = {
  Title: PropTypes.array,
  items: PropTypes.number
}

export default function ServicioList({ Title, items }) {

  const services = [
    {
      icon: <SiWebmoney className="f_icon" />,
      title: "Desarrollo web",
      description: "Creamos aplicaciones web excepcionales y dinámicas. Nuestras soluciones son eficientes y optimizadas, asegurando una mejor experiencia de usuario para tus clientes."
    },
    {
      icon: <MdOutlineTabletAndroid className="f_icon" />,
      title: "Desarrollo móvil",
      description: "Desarrollamos aplicaciones móviles atractivas y seguras para Android y multiplataforma, optimizando constantemente la experiencia del usuario."
    },
    {
      icon: <FaDesktop className="f_icon" />,
      title: "Desarrollo de escritorio",
      description: "Creamos aplicaciones de escritorio eficientes, aplicando patrones de diseño efectivos para lograr un alto rendimiento seguridad y buena interaccion con el usuario."
    },
    {
      icon: <FaShoppingCart className='f_icon' />,
      title: "Desarrollo de E-commerce",
      description: "Creamos soluciones e-commerce personalizadas que integran pagos seguros y mejoran la experiencia de compra en línea."
    },
    {
      icon: <FaSearch className='f_icon' />,
      title: "SEO y Marketing Digital",
      description: "Ofrecemos servicios SEO para mejorar la visibilidad online de tu web y fortalecer tu estrategia de marketing digital."
    },
    {
      icon: <FaComments className='f_icon' />,
      title: "Consultoría de Tecnología",
      description: "Proporcionamos asesoría para transformar digitalmente tu negocio, evaluando y mejorando tus necesidades tecnológicas."
    },
    {
      icon: <FaTools className='f_icon' />,
      title: "Soporte y Mantenimiento",
      description: "Ofrecemos planes de mantenimiento a medida para asegurar el correcto funcionamiento de tus aplicaciones a largo plazo."
    },
    {
      icon: <FaCodeBranch className='f_icon' />,
      title: "Desarrollo de APIs",
      description: "Creamos APIs que permiten la integración de sistemas y desarrollan la funcionalidad de múltiples aplicaciones."
    },
    {
      icon: <FaLink className='f_icon' />,
      title: "Integración de Sistemas",
      description: "Ayudamos a unir aplicaciones y plataformas para mejorar la eficiencia y operatividad de tu negocio en su conjunto."
    },
    {
      icon: <IoSettingsSharp className='f_icon' />,
      title: "Desarrollo de Software a Medida",
      description: "Creamos soluciones personalizadas que se adaptan plenamente a los requerimientos específicos de tu negocio en todos los niveles."
    }
  ]

  useEffect(() => {
    const article = document.querySelectorAll(".services .list article");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(
          ({ target, isIntersecting }) => {
            if (isIntersecting) {
              target.style.transform = "translateX(0%)"
              target.style.opacity = "1"
            } else {
              target.style.transform = "translateX(-20%)"
              target.style.opacity = "0"
            }
          }
        )
      },
      {
        root: null,
        rootMargin: '0px 0px -100% 0px',
        threshold: [0.5, 1.0]
      }
    )

    article.forEach(item => {
      observer.observe(item)
    })

    return () => {
      article.forEach(item => {
        observer.unobserve(item)
      })
    }
  }, [])

  const list = services.slice(0, items || services.length);

  return (
    <section className="services">
      <h2>{Title}</h2>
      <div className="list">
        {
          list.map(({ icon, title, description }, index) => (
            <article key={index} className="s-card">
              {icon}
              <label>{title}</label>
              <p>{description}</p>
            </article>
          ))
        }
      </div>
    </section>
  );
}