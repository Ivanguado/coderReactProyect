import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();

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

    return (
        <div>
        <h1>Detalle</h1>
        <div>
            {product ? (
                <React.Fragment>
                    <h2>Nombre del producto: {product.title}</h2>
                    <p>Precio {product.price}</p>
                </React.Fragment>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    </div>
    
    );
}

export default ItemDetailContainer;
