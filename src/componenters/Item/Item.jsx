// Item.js

import { Link } from "react-router-dom"

const Item = ({ productId, name, img, price }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={img} style={{ width: 100 }} /> 
            <Link to={`/detail/${productId}`}>Ver detalle</Link>
        </div>
    )
}

export default Item