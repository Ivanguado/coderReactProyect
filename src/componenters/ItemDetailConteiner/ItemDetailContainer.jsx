// Importamos los hooks useEffect y useState de React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../ItemListContainer/products.js";

// Creamos el componente funcional ItemDetailContainer
const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
    const productos = useFetchProducts();

    const getProductById = (productId) => {
        console.log("Pedimos los productos para sacar el id")
        return new Promise((resolve) => {
            setTimeout(() => {
                // Utiliza la función find para buscar el producto con el ID especificado
                const product = productos.find(prod => prod.id === productId);
                // Devuelve el producto encontrado
                resolve(product);
            }, 1000);
        });
    }

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await getProductById(productId);
                setProduct(response);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProduct();
    }, [productId]);

    return (
        <div>
            <h1>Detalle</h1>
            {/* Mostramos los detalles del producto */}
            {product && (
                <div>
                    <h2>{product.name}</h2>
                    <p>Precio: {product.price}</p>
                    <p>Descripción: {product.description}</p>
                </div>
            )}
        </div>
    );
}

// Exportamos el componente ItemDetailContainer para que pueda ser utilizado en otros módulos
export default ItemDetailContainer;
