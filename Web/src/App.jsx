import Navbar from './Components/dashboard/Navbar';
import { Routes, Route } from 'react-router-dom';
import Principal from './Components/dashboard/Principal';
import Proyectos from './Components/projects/Proyectos';
import Nosotros from './Components/about/Nosotros';
import Contacto from './Components/contact/Contacto';
import Servicios from './Components/services/Servicios';
import ButtonScrollTop from './Components/ButtomScrollTop';
import Default from './Components/Default';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

export default function App() {

  useEffect(() => {
    document.body.style.background = "rgb(15, 15, 15)";
  }, []);

  return (
    <>
      <ToastContainer />
      <Navbar />
      <ButtonScrollTop />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/Soluciones" element={<Proyectos />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/*" element={<Default />} />
      </Routes>
    </>
  );
}
