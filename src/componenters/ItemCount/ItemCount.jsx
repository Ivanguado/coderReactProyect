import { useState } from "react"


const ItemCount = ({initial=1, onAdd, stock}) => {
    const [count, setCount] = useState(initial)

    const { id, name, price, img  } = onAdd;

    const increment = () => {
        if(count < stock){
            setCount(prev => prev + 1)
        }
    }


   const decrement = () => {
     if(count > 1){
        setCount(prev => prev - 1)
     }
   }

   return(
    <>
    <p>Aca estamos probando</p>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    </>
  )
}


export default ItemCount;