// products.js

import { useEffect, useState } from "react";

// Función personalizada para obtener los productos de la API
export const useFetchProducts = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        console.log("Llamda a los productos")
        fetch('https://api.mercadolibre.com/sites/MLA/search?q=suplementos')
            .then((res) => res.json())
            .then((data) => {
                setProductos(data.results);
            })
            .catch((error) => {
                console.log("Error en la carga de archivos", error);
            });
    }, [1000]);

    return productos;
}




