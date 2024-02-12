import { useEffect, useState } from "react"
import { mFetch } from "../../listProducts/listProducts"

export const ItemListConstainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        mFetch()
            .then(products => setProductos(products))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h2 className="text-center">{greeting}</h2>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>{producto.name}</li>
                ))}
            </ul>
        </div>
    ) 
}