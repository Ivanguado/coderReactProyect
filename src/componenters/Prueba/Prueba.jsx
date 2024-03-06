import { render } from "react-dom";
import React, {useState} from "react";

const Prueba = (props) => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        return(
            setCount(count + 1)
        )
    }

    const decrement = () => {
        return(
            setCount(count - 1)
        )
    }

    return(
        <>
        <p>Aca estamos probando {props.probamosPromp}</p>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
        </>
    )
}

export default Prueba;

