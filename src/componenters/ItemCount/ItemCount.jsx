import { useState } from "react"
import { sumandoLasCantidades } from "../ItemDetailConteiner/ItemDetailContainer"


const ItemCount = ({initial=1, onAdd, stock}) => {
    const [count, setCount] = useState(initial)


    const increment = () => {
        if(count < stock){
            setCount(prev => {
            const newValue =  prev + 1;
            sumandoLasCantidades(newValue)
        console.log("sumando las cantidades" + sumandoLasCantidades(newValue))
        return newValue;
      })
        }
    }


   const decrement = () => {
     if(count > 1){
        setCount(prev => {
          const newValue = prev - 1;
          sumandoLasCantidades(newValue)
        console.log("restando las cantidades" + sumandoLasCantidades(newValue))
        return newValue;
        })
     }
   }

   return(
    <>
    <p>Aca estamos probando</p>
    <button onClick={decrement}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
    <button onClick={onAdd}>Agregar al carrito</button>
    </>
  )
}  


export default ItemCount;