import React from 'react';
import { useEffect, useState} from "react";
import { useParams, Link } from "react-router-dom";
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartContext';

let cantidad = 0;

export const sumandoLasCantidades = (n) =>{
    cantidad = n;
    return n
   
}

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const {addItem, isInCart} = useCart();

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/items/${productId}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then((data) => {
                // Verificar si se encontró el producto
                if (data) {
                    setProduct(data); // Establecer el producto encontrado en el estado
                } else {
                    console.log('Producto no encontrado');
                    throw new Error('Producto no encontrado');
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [productId]); // Dependencia: el efecto se ejecutará cuando cambie el productId
    
   
    

    const handleAdd = () => {
        const productObj = {
         id: product.id,
         name: product.title,
         price: product.price,
         img: product.thumbnail,
         category: product.category_id,
         cantidades: cantidad
        };
        console.log(productObj)
        addItem(productObj)
    }


    return (
        <article>
        <h1>Detalle</h1>
        <div>
            {product ? (
                <React.Fragment>
                       <h2>{product.name}</h2>
                       <img src={product.thumbnail} style={{width: 300}}/>
                       <p>Categoria:{product.category_id}</p>
                       <p>Description: {product.title}</p>
                       <h1>{product.price}</h1>
                       <footer>
                       {isInCart(product.id) ? (
                       <Link to="/cart">Ir al carrito</Link>
                       ) : (
                       <ItemCount onAdd={handleAdd} stock={product.initial_quantity}/>
                       )}
                       </footer>
                </React.Fragment>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    </article>
    
    );
}
export default ItemDetailContainer;
