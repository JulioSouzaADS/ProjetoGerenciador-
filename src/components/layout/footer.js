
import './footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'


function Footer() {
    return (
        <footer className='footer'>
            <ul className='social_list'>
                <li> <FaFacebookSquare></FaFacebookSquare></li>
                <li> <FaInstagramSquare></FaInstagramSquare></li>
                <li> <FaLinkedin></FaLinkedin></li>

            </ul>
            <p className='copy_right'><span>Costs &copy 2023</span></p>

        </footer>
    )
}

export default Footer

