import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import Inicio from "../pages/inicio/Inicio"
import Noticias from "../pages/noticias/Noticias"
import Nosotros from "../pages/quienes-somos/Nosotros"
import Contacto from "../pages/contacto/Contacto"
import Error404 from "../pages/error404/Error404"

const RouterPrincipal = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path ="/" element={<Inicio/>} />
                    <Route path = "/noticias" element={<Noticias/>} />
                    <Route path = "/quienes-somos" element={<Nosotros />} />
                    <Route path = "/contacto" element={<Contacto />} />
                     <Route path = "/error-404" element={<Error404 />}/>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default RouterPrincipal