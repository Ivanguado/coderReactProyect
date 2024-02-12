import './NavbarStyle.css';

import cartImage from '../../assets/img/cart.png';
import homeImage from '../../assets/img/home.png';

const NavBar = () => {
    return(
      <>
        <header className="index_header--navbar generic_nav navbar navbar-expand-lg bg-body-tertiaryM">   
            <a className="navbar-brand" href="../index.html">
                <img className="header--img" src={homeImage} alt="RIG -Desing-" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
                    <li className="nav-item">
                        <a className="nav-link active index_nav-a" aria-current="page" href="./folders/know_more.html">PRODUCTOS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active index_nav-a" aria-current="page" href="./folders/service.html">CONTACTO</a>
                    </li>
                </ul>
            </div>
            <a className="navbar-brand" href="../index.html">
                <img className="header--img" src={cartImage} alt="RIG -Desing-" />
            </a>
        </header>
      </>
    )
}

export default NavBar