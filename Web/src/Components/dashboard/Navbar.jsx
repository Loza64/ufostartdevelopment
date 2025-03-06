import { useState } from "react";
import { Link, useLocation } from "react-router-dom"
import { NavbarContainer, NavbarMenu } from "../Style/style";
import { FaBriefcase, FaEnvelope, FaHome, FaLightbulb, FaTimes, FaUserTie } from "react-icons/fa";

export default function Navbar() {
  const [ShowMenu, setShowMenu] = useState(false);
  const [HeightNavBar, setHeightNavBar] = useState(true)

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  window.addEventListener('scroll', () => {
    setHeightNavBar(window.scrollY <= 200);
  })

  const items = [
    {
      label: "Inicio",
      icon: <FaHome className="iconfont" />,
      to: "/"
    },
    {
      label: "Servicios",
      icon: <FaBriefcase className="iconfont" aria-hidden="true" />,
      to: "/Servicios"
    },
    {
      label: "Nosotros",
      icon: <FaUserTie className="iconfont" aria-hidden="true" />,
      to: "/Nosotros"
    },
    {
      label: "Soluciones",
      icon: <FaLightbulb className="iconfont" />,
      to: "/Soluciones"
    },
    {
      label: "Contacto",
      icon: <FaEnvelope className="iconfont" aria-hidden="true" />,
      to: "/Contacto"
    }
  ]

  const { pathname } = useLocation();


  return (
    <NavbarContainer statenavbar={HeightNavBar}>
      <div className="logo">
        <div className="icono">
          <img src="https://res.cloudinary.com/ufostart-development/image/upload/v1691084127/UFOSTARTIMG/j8qquxpasqfp7gjfq4jm.png" alt="titulo" />
        </div>
        <div className="titulo">
          <label style={{ color: 'white' }}>UFOSTART </label> <label className="labelnone" style={{ color: 'red' }}>DEVELOPMENT</label>
        </div>
      </div>
      <NavbarMenu open={ShowMenu}>
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className={`enlace ${pathname === item.to ? "active" : ""}`}
            onClick={() => { setShowMenu(false); scrollTop() }}
          >
            {item.icon}
            <label>{item.label}</label>
          </Link>
        ))}

        <div className="menu" onClick={() => { setShowMenu(false); }}>
          <FaTimes id="btn-close" />
        </div>
      </NavbarMenu>
      <div className="menu d-menu" onClick={() => setShowMenu(true)}>
        <i className="fa fa-bars" id="btn-menu" />
      </div>
    </NavbarContainer>
  )
}
