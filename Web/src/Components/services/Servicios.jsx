import Banner from "../Banner";
import Footer from "../Footer";
import Header from "../Header";
import Lenguajes from "../Lenguajes";
import OurProjects from "../projects/OurProjects";
import ServicioList from "./ServicioList";
import { useEffect } from "react";

export default function Servicios() {

  useEffect(()=>{
      document.title = "UFOSTART DEVELOPMENT | Servicios"
    },[])

  return (
    <>
      <Header Title={"Potencia tu Negocio con UFOSTART: Servicios Innovadores a tu Alcance."} />
      <ServicioList Title={"Descubre los Servicios Transformadores de UFOSTART"} />
      <Lenguajes title={"Tecnologías Avanzadas que Emplea UFOSTART para tu Éxito"} />
      <OurProjects />
      <Banner />
      <Footer />
    </>
  )
}