import React from 'react';
import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from '../../App';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const {addItem, isInCart} = useContext(CartContext);

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
                    console.log('Producto encontrado:', data);
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
    

    const handleAdd = (count) => {
        console.log("Agregar al carrito");
        const productObj = {
         id: product.id,
         name: product.title,
         price: product.price,
         quantity: count,
         img: product.thumbnail
        };
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
                       <ItemCount onAdd={handleAdd} />
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
