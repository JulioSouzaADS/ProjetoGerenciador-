import { Link } from 'react-router-dom'
import Container from './container'

import "../layout/container.css"
import './navbar.css'

const logo = "../../images/savings.svg"

function NavBar() {

    return (
        <>

           <nav>
           <Container>
                <ul className="navbar">
                    <li className='list'>
                        <Link to="/"><img src={logo} /></Link>
                    </li>
                    <li className='list item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='list item'>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className='list item'>
                        <Link to="/contact">Contatos</Link>
                    </li>
                    <li className='list item'>
                        <Link to="/projects"> Projetos</Link>
                    </li>
                    <li className='list item'>
                        <Link to="/newproject">Novos Projetos</Link>
                    </li>
                </ul>
            </Container>
           </nav>
        </>
    )
}

export default NavBar