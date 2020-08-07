import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/LogoPeriquitoVerdeFlix.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from '../ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
               <img className="Logo" src={Logo} alt="PeriquitoVerdeFlix Logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;