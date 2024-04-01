
import React from "react";
import { useCart } from "../../context/CartContext";


export const ItemDetailWidger = () => {
    
    const { clearCart, cart, removeItem } = useCart();
    console.log("Estamos aca en ItemDeilWidher viedo si llega algo al de cart + " + cart)

    return (
        <React.Fragment>
            <h2>¿ Desea eliminar lo cargado en el carrito ?</h2>
            <button onClick={clearCart}>Eliminar</button>
            <br></br>
            <div>
            <h3>¿Desea eliminar un producto en especifico?</h3>
            <section className="ItemListCon_section">
                {cart.map((prod) => (      
                    <article key={prod.id}>
                        <h6>{prod.name}</h6>
                        <img src={prod.img} alt={prod.title} />
                        <p>Categoria: {prod.category_id}</p>
                        <p>{prod.price}</p>
                        <p>El id del producto es: {prod.id}</p>
                        <button onClick={()=>removeItem(prod.id)}>Eliminar</button>
                    </article>
                ))}
            </section>
        </div>
        </React.Fragment>
    );
}