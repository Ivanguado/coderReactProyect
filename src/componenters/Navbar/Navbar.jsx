import './NavbarStyle.css'; // Importamos los estilos CSS para el Navbar
import { Link } from 'react-router-dom'; // Importamos el componente Link de react-router-dom

// Importamos las imágenes de los iconos para el Navbar
import cartImage from '../../assets/img/cart.png';
import homeImage from '../../assets/img/home.png';

// Componente funcional NavBar
const NavBar = () => {
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
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                        {/* Enlaces de navegación */}
                        <li className="nav-item">
                            <a className="nav-link active index_nav-a" aria-current="page" href="./folders/know_more.html">PRODUCTOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active index_nav-a" aria-current="page" href="./folders/service.html">CONTACTO</a>
                        </li>
                    </ul>
                </div>
                {/* Icono del carrito de compras */}
                <a className="navbar-brand" href="../index.html">
                    <img className="header--img" src={cartImage} alt="RIG -Desing-" />
                </a>
            </header>
            {/* Menú de navegación con enlaces a diferentes categorías */}
            <nav>
                <section>
                    <Link to="/category/proteina"> Proteinas </Link>
                    <Link to="/category/creatina"> Creatina </Link>
                    <Link to="/category/aminoacido"> Aminoacidos </Link>
                </section>
            </nav>
        </>
    )
}

export default NavBar; // Exportamos el componente NavBar
