/*import {useContext} from 'react'
import { Link } from 'react-router-dom'
/* import ItemCount} from '../../ItemCount'*/
/*import { CartContext } from '../../App'
import ItemCount from '../ItemCount/ItemCount'
*/

const ItemDetail = ({name, img, category, price, description, stock}) => {

    const {addItem, isInCart} = useContext(CartContext);

    const handleAdd = (count) => {
        console.log("Agregar al carrito");
        const productObj = {
            id, name, price, quantity: count
        }
    };
    return (
        <article>
            <h1>{name}</h1>
            <img src={img} style={{width: 300}}/>
            <p>Categoria:{category}</p>
            <p>Description: {description}</p>
            <h1>{price}</h1>
            <footer>
              {isInCart(id) ? (
                <Link to="/cart">Ir al carrito</Link>
              ) : (
                <ItemCount onAdd={handleAdd} stock={stock}/>
              )}
            </footer>
        </article>
    )
}

export default ItemDetail;