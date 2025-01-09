import PropTypes from 'prop-types'
import { useEffect } from 'react';
import { FaChartLine, FaClipboardCheck, FaLightbulb, FaPhoneSquare, FaRegHandshake, FaShieldAlt, FaTools } from "react-icons/fa";
import { TbStarFilled } from "react-icons/tb";
import { FiClock } from "react-icons/fi";

AboutUs.propTypes = {
  Title: PropTypes.string,
  items: PropTypes.number
}

export default function AboutUs({ Title, items }) {

  const features = [
    {
      icon: <TbStarFilled className='f_icon' />,
      title: "Buena experiencia",
      description: "Contamos con el conocimiento y la experiencia necesarios para desarrollar cualquier sistema que requieras, ya sea un carrito de compras, un sistema de pagos, entre otros."
    },
    {
      icon: <FaShieldAlt className='f_icon' />,
      title: "Excelente calidad",
      description: "Puedes tener la certeza de que todos los proyectos que nos solicites estarán diseñados con el más alto estándar de calidad y ofrecerte soluciones que contribuyan a mejorar tu negocio."
    },
    {
      icon: <FaPhoneSquare className='f_icon' />,
      title: "Atención excelente",
      description: "Siempre estamos atentos a tus mensajes para poder responderte lo más rápidamente posible con el objetivo de brindarte la asistencia que necesites para impulsar y mejorar tu negocio."
    },
    {
      icon: <FaRegHandshake className='f_icon' />,
      title: "Compromiso con el cliente",
      description: "Nuestra prioridad es garantizar tu satisfacción. Trabajamos en estrecha colaboración contigo para entender tus necesidades y adaptarnos a los cambios que surjan durante el proceso."
    },
    {
      icon: <FiClock className='f_icon' />,
      title: "Entregas a tiempo",
      description: "Nos comprometemos a cumplir con los plazos establecidos para que tu proyecto se complete a tiempo y dentro del presupuesto, sin comprometer la calidad."
    },
    {
      icon: <FaLightbulb className='f_icon' />,
      title: "Innovación constante",
      description: "Estamos siempre al tanto de las últimas tendencias y tecnologías para ofrecerte soluciones innovadoras y eficientes que mantengan tu negocio a la vanguardia."
    },
    {
      icon: <FaChartLine className='f_icon' />,
      title: "Resultados medibles",
      description: "El 95% de nuestros clientes reportan un aumento en la eficiencia de sus operaciones tras implementar nuestros sistemas."
    },
    {
      icon: <FaClipboardCheck className='f_icon' />,
      title: "Proceso claro y estructurado",
      description: "Seguimos un enfoque ágil y organizado, que incluye la planificación, desarrollo, pruebas y revisión continua para asegurar que cada etapa del proyecto se ajuste a tus necesidades y expectativas."
    },
    {
      icon: <FaTools className='f_icon' />,
      title: "Soporte y mantenimiento",
      description: "Ofrecemos soporte continuo y mantenimiento para asegurar que tu sistema funcione sin problemas y se ajuste a tus necesidades cambiantes."
    }
  ];

  useEffect(() => {
    const article = document.querySelectorAll(".about-us .list article");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          setTimeout(() => {
            target.style.transform = "translateY(0%)"
            target.style.opacity = "1"
          }, 1000)
        } else {
          target.style.transform = "translateY(20%)"
          target.style.opacity = "0"
        }
      })
    })

    article.forEach(item => {
      observer.observe(item)
    })

    return () => {
      article.forEach(item => {
        observer.unobserve(item)
      })
    }
  }, [])

  const list = features.slice(0, items || features.length);

  return (
    <section className="about-us">
      <h2>{Title}</h2>
      <div className="list">
        {
          list.map(({ icon, title, description }, index) => (
            <article key={index}>
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