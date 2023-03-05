import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "../layout/container";

import Home from "../pages/home";
import Company from "../pages/company";
import NewProject from "../pages/newProject";
import Contact from "../pages/contact";


function RotasReact() {
    return (

        <BrowserRouter>
            <Container customClass='start'>
                <ul className="container">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contatos</Link>
                    </li>
                    <li>
                        <Link to="/newproject">Novos Projetos</Link>
                    </li>
                </ul>
            </Container>
            <Container customClass="min-height">
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/company" element={<Company />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/newproject" element={<NewProject />} />

                </Routes>
            </Container>

        </BrowserRouter>
    )
}


export default RotasReact