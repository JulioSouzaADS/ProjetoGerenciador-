import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Container from "../layout/container";

import Home from "../pages/home";
import Company from "../pages/company";
import NewProject from "../pages/newProject";
import Contact from "../pages/contact";
import Projects from "../pages/projects";

import NavBar from "../layout/navbar";
import Footer from "../layout/footer";


function RotasReact() {
    return (

        <BrowserRouter>
        
                <NavBar>
               
                </NavBar>
       
            <Container customClass="min-height">
                <Routes>

                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/company" element={<Company />} />
                    <Route exact path="/contact" element={<Contact />} />
                    <Route exact path="/projects" element={<Projects />} />
                    <Route exact path="/newproject" element={<NewProject />} />


                </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
        
    )
}


export default RotasReact