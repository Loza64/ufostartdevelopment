import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function OurProjects() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  useEffect(() => {
    const our_projects = document.querySelector(".our_projects")
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        ({ target, isIntersecting }) => {

          const img = target.querySelector("img");
          const h2 = target.querySelector(".content h2");
          const p = target.querySelector(".content p");
          const button_projects = target.querySelector(".content .button-projects");

          if (isIntersecting) {
            img.style.transform = "scale(1)"

            h2.style.opacity = "1"
            h2.style.transform = "translateY(0%)"

            p.style.opacity = "1"
            p.style.transform = "translateY(0%)"

            button_projects.style.transform = "scale(1)"
            button_projects.style.opacity = "1";
          } else {
            img.style.transform = "scale(0)"

            h2.style.opacity = "0"
            h2.style.transform = "translateY(-40%)"

            p.style.opacity = "0"
            p.style.transform = "translateX(40%)"

            button_projects.style.transform = "scale(0)"
            button_projects.style.opacity = "0";
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.9
        }
      )
    })

    observer.observe(our_projects)

    return () => {
      observer.unobserve(our_projects)
    }
  }, [])

  return (
    <div className="our_projects">
      <img src="https://res.cloudinary.com/ufostart-development/image/upload/v1672419772/UFOSTARTIMG/afujhetplgfqzpdqmgem.png" alt="proyectos" />
      <div className="content">
        <h2> <label style={{ color: 'white' }}>NUESTRAS </label> <label style={{ color: 'red' }}>SOLUCIONES</label></h2>
        <p>
          UFOSTART utiliza las mejores tecnologias de diseño y programación, incluyendo tambien
          utiles herramientas para el marketing, la realización de dichos proyectos, ya sea web o
          de escritorio son los suficientemente eficientes y poseen buena seguridad siendolo aun más con sus actualizaciones,
          tomando en cuenta la mayor accesibilidad y su diseño adaptable para tu negocio.
        </p>
        <Link to="/Soluciones" className="button-projects" onClick={scrollTop}>Ver soluciones</Link>
      </div>
    </div>
  );
}