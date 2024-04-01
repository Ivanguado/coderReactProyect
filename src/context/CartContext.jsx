import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  /* Agregar productos al carrito */
  const addItem = (productToAdd) => {
    if (!isInCart(productToAdd.id)) {
      setCart((prev) => [...prev, productToAdd]);
      getTotalQuantity(productToAdd)
      console.log("Agregando el producto al carrito", cart);
    } else {
      console.log("El producto ya está en el carrito con addItem", cart);
    }
  };

  /* Verificar si un producto está en el carrito */
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  /* Limpiar el carrito */
  const clearCart = () => {
    setCart([]);
  };

  /* Obtener la cantidad total de productos en el carrito */
  const getTotalQuantity = (prod) => {
    let accu = 0;
    
    cart.forEach((prod) => {
      console.log(prod)
      accu += prod.cantidades;
    });
    
    console.log("vamos si podemos obtener la cantidad total del carrito" + accu);
    return accu;
  };

  const totalQuantity = getTotalQuantity();

  /* Eliminar un producto del carrito */
  const removeItem = (id) => {
    const cartUpdated = cart.filter((prod) => prod.id !== id);
    setCart(cartUpdated);
  };

  useEffect(() => {
    console.log("Actualizando el carrito", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addItem, clearCart, isInCart, removeItem, totalQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
