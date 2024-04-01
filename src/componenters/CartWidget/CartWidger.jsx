import { Link } from 'react-router-dom';
import cartImage from '../../assets/img/cart.png';
import { useCart } from '../../context/CartContext';

export const CartWidget = () => {
    const { totalQuantity } = useCart();
    console.log(totalQuantity) 
    return (
        <>
            {/* Enlace del carrito de compras */}
            {totalQuantity === 0 || totalQuantity === null || totalQuantity === undefined ? (
                <button onClick={() => alert("Usted no tiene productos agregados al carrito")}>
                    <img className="header--img" src={cartImage} alt="cart img" />
                    {totalQuantity}
                </button>
            ) : (
                <Link to="../ItemDetailWidger" className="navbar-brand">
                    <img className="header--img" src={cartImage} alt="cart img" />
                    {totalQuantity}
                </Link>
            )}
        </>
    )
}