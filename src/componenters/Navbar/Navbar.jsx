import './NavbarStyle.css'; // Importamos los estilos CSS para el Navbar
import { Link } from 'react-router-dom'; // Importamos el componente Link de react-router-dom
import { CartWidget } from '../CartWidget/CartWidger';

import homeImage from '../../assets/img/home.png';


// Componente funcional NavBar
const NavBar = (category_Id) => {
    
    return(
        <>
            
            {/* Encabezado del Navbar */}
            <header className="index_header--navbar generic_nav navbar navbar-expand-lg bg-body-tertiaryM">   
                {/* Logo del Navbar que redirige al inicio */}
                <Link to="/" className="navbar-brand" href="../index.html">
                    <img className="header--img" src={homeImage} alt="RIG -Desing-" />
                </Link>
                {/* Botón para desplegar el menú en dispositivos móviles */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Menú desplegable */}
                <nav>
                <section className="collapse navbar-collapse" id="navbarScroll">
                    <Link to="/category/Proteínas"> Proteinas </Link>
                    <Link to="/category/Magnesio"> Magnesio </Link>
                    <Link to="/category/Creatina"> Creatina </Link>
                    <Link to="/category/Vitamina"> Vitamina </Link>
                    <Link to="/category/Glutamina"> Glutamina </Link>
                </section>
            </nav>
                 {/* Menú de navegación con enlaces a diferentes categorías */}
                 <CartWidget/>
            </header>
           
        </>
    )
}

export default NavBar; // Exportamos el componente NavBar
