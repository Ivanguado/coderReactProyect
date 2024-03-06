import React, { useEffect, useState } from "react";
import { useFetchProducts } from "./products";
import './ItemListCon.css';
import Item from "../Item/Item";

const ItemListContainer = () => {
    // Obtenemos los productos utilizando el hook useFetchProducts
    const productos = useFetchProducts();
    console.log(productos)
    return (
        <div>
            <h1>Estamos aca</h1>
            <section className="ItemListCon_section">
                {productos.map((prod) => (      
                    <article key={prod.id}>
                        <h3>{prod.title}</h3>
                        <img src={prod.thumbnail} alt={prod.title} />
                        <p>{prod.price}</p>
                        <p>El id del producto es: {prod.id}</p>
                        <Item /> 
                    </article>
                ))}
            </section>
        </div>
    );
};

export default ItemListContainer;
