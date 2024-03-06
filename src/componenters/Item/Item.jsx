import { Link } from "react-router-dom"

const Item = ({id ,name, img, price}) =>{
    return(
        <div>
            <h1>{name}</h1>
            <img src={img} style={{with: 100}} />
            <Link to={`/detail:productId`}> Ver detalle </Link> /*React router Dom nos da la posibilidad de usar Linck
        </div>
    )
}

export default Item