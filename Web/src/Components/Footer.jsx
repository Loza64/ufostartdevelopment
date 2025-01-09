export default function Footer() {
  return (
    <footer>
      <div className="content">
        <section className="target">
          <h3>UFOSTART</h3>
          <p>
            Somos una empresa de desarrollo de software dedicada a la creación de aplicaciones
            web y de escritorio, utilizando tecnologías y metodologías de vanguardia. Nos comprometemos
            a ofrecer estrategias efectivas en publicidad y marketing, poniendo todo nuestro corazón
            en nuestro trabajo.
          </p>
        </section>

        <section className="target">
          <h3>Servicios</h3>
          <label>
            <i className="fa fa-code" /> Desarrollo web
          </label>
          <label>
            <i className="fa fa-mobile" /> Desarrollo móvil
          </label>
          <label>
            <i className="fa fa-desktop" /> Desarrollo para escritorio
          </label>
        </section>

        <section className="target">
          <h3>Nosotros</h3>
          <label>
            <i className="fa fa-star" /> Buena experiencia
          </label>
          <label>
            <i className="fa fa-phone" /> Atención excelente
          </label>
          <label>
            <i className="fa fa-check" /> Excelente calidad
          </label>
        </section>

        <section className="target">
          <h3>Redes Sociales</h3>
          <a href="https://www.facebook.com/UFOSTART.DEVELOPMENT" aria-label="Síguenos en Facebook">
            <i className="fa fa-facebook" /> Síguenos en Facebook
          </a>
          <a href="https://www.instagram.com/ufostart.development/" aria-label="Síguenos en Instagram">
            <i className="fa fa-instagram" /> Síguenos en Instagram
          </a>
          <a href="https://api.whatsapp.com/send?phone=50376263182&app=facebook&entry_point=page_cta&fbclid=IwAR2yMe-dpV2Np4sA6R83Z0hxCkI7UlOkEVXSHI_5zWv43G48ckJA1UxY1WM" aria-label="Escríbenos por WhatsApp">
            <i className="fa fa-whatsapp" /> Escríbenos por WhatsApp
          </a>
          <a href="mailto:ufostartservices@gmail.com" aria-label="Envía un correo a UFOSTART">
            <i className="fa fa-envelope" /> ufostartservices@gmail.com
          </a>
        </section>
      </div>

      <div className="footer-bottom">
        <span>UFOSTART </span>
        <span className="highlight">DEVELOPMENT</span> SA DE CV
      </div>
    </footer>
  );
}