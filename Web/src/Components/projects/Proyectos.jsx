import { useEffect } from "react";
import Banner from "../Banner";
import Header from "../Header";
import Lenguajes from "../Lenguajes";
import ProjectList from "./ProjectList";
import LoadingBar from 'react-spinners/BarLoader'
import Footer from "../Footer";
import { ContextConsumer } from "../../Context/ContextConsumer";

export default function Proyectos() {

  const { getProjects, loadProjects, Projects } = ContextConsumer()

  useEffect(()=>{
    document.title = "UFOSTART DEVELOPMENT | Soluciones"
  },[])

  useEffect(() => {
    getProjects()
  }, [])

  return loadProjects ? (
    <div className="loading">
      <LoadingBar
        color="red"
        size={"5rem"}
        width={"100%"}
      />
    </div>
  ) : (
    Projects && Projects.length > 0 ? (
      <>
        <Header Title={"Transformamos visiones en realidad: proyectos creados con esfuerzo, pasión y precisión"} />
        <ProjectList />
        <Lenguajes title={"Tecnologias que se suelen utilizar en los proyectos"} />
        <Banner />
        <Footer />
      </>
    ) : (
      <>
        <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
          <div className="text-center text-title text-uppercase" style={{ color: 'red' }}>
            <h3 className="display-5">No hay proyectos disponibles</h3>
          </div>
        </div>
        <Footer />
      </>

    )
  );
}