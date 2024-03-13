// itemListContainer.jsx

import React, { useEffect, useState } from "react";
import { useFetchProducts, getProductByCategory } from "./products";
import './ItemListCon.css';
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { category_id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                let fetchedProducts = await useFetchProducts();
                if (category_id) {
                    fetchedProducts = await getProductByCategory(fetchedProducts, category_id);
                    console.log(fetchedProducts)
                }
                setProductos(fetchedProducts);
            } catch (error) {
                console.error("Error al obtener productos:", error);
            }
        };
        fetchData();
    }, [category_id]);

    if (!productos || productos.length === 0) {
        return <div>Cargando productos...</div>;
    }
    console.log(productos)
    return (
        <div>
            <h1>Estamos aca</h1>
            <section className="ItemListCon_section">
                {productos.map((prod) => (      
                    <article key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} alt={prod.title} />
                        <p>Categoria: {prod.category_id}</p>
                        <p>{prod.price}</p>
                        <p>El id del producto es: {prod.id}</p>
                        <Item productId={prod.id} /> 
                    </article>
                ))}
            </section>
        </div>
    );
};

export default ItemListContainer;
