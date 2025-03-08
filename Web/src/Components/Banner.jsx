import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Banner() {

  const scrolltop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    })
  }

  useEffect(() => {
    const banner = document.querySelector(".banner")

    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        ({ isIntersecting, target }) => {
          const h2 = target.querySelector("h2");
          const h3 = target.querySelector("h3");
          const btn_link = target.querySelector(".btn-link");
          if (isIntersecting) {
            setTimeout(() => {
              h2.style.opacity = "1";
              h2.style.transform = "translateY(0%)"

              h3.style.opacity = "1";
              h3.style.transform = "scale(1)"

              btn_link.style.transform = "rotateY(0deg)"
            }, 1000)
          } else {
            h2.style.opacity = "0";
            h2.style.transform = "translateY(-50%)"

            h3.style.opacity = "0";
            h3.style.transform = "scale(0)"

            btn_link.style.transform = "rotateY(90deg)"
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 0.2
        })

    })

    observer.observe(banner)

    return () => {
      observer.unobserve(banner)
    }
  }, [])

  return (
    <section className="banner">
      <h2>Estamos listos para todo lo que necesites</h2>
      <h3>Contáctanos para llevar tu proyecto al siguiente nivel.</h3>
      <Link to="/Contacto" className="btn-link" onClick={scrolltop}>
        Contactarme ahora
      </Link>
    </section>
  );
}