import Footer from "../Footer";
import Formulario from "./Formulario";
import Questions from "./QuestionList";
import ServicioList from "../services/ServicioList";
import { useEffect } from "react";

export default function Contacto() {

  useEffect(() => {
    document.title = "UFOSTART DEVELOPMENT | Contacto"
  }, [])

  return (
    <>
      <div className="banner">
        <h2>¡El futuro comienza aquí y ahora!</h2>
        <h3>Contamos con la experiencia para llevar tu proyecto al siguiente nivel.</h3>
      </div>
      <Formulario />
      <ServicioList Title={"Elige los servicios que quieras"} items={3} />
      <Questions />
      <Footer />
    </>
  );
}