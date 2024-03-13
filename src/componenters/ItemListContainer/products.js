// products.js

import { useEffect, useState } from "react";

export const useFetchProducts = async () => {
    try {
        console.log("Llamada a los productos");
        const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=suplementos');
        if (!response.ok) {
            throw new Error('No se pudo obtener la respuesta de la API.');
        }
        const data = await response.json();
        return data.results;
    } catch (error) {
        throw new Error('Error al obtener productos de la API.');
    }
}

export const getProductByCategory = async (productos, category) => {
    console.log(productos);
    try {
        console.log("Filtrando productos por categoría:", category);
        const filteredProducts = productos.filter(prod => prod.title.includes(category)); // Aquí se compara el título del producto con la categoría deseada
        return filteredProducts;
    } catch (error) {
        throw new Error('Error al filtrar productos por categoría.');
    }
}


