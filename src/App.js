import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from './components/pages/home'
import Company from './components/pages/company'
import Contact from './components/pages/contact'
import NewProject from './components/pages/newProject'

import Container from "./components/layout/container";
import RotasReact  from "./components/routes/routes";

function App() {
  return (
    <>
      <RotasReact/>
    </>
  );
}

export default App;
