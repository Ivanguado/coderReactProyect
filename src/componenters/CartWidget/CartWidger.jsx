import cartImage from '../../assets/img/cart.png';

export const CartWidget = () => {
    return(
        <>
           {/* Icono del carrito de compras */}
           <a className="navbar-brand" href="../index.html">
                <img className="header--img" src={cartImage} alt="RIG -Desing-" />
            </a>
        </>
    )
}