import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componenters/Navbar/Navbar'
import ItemListContainer from './componenters/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componenters/ItemDetailConteiner/ItemDetailContainer'; // Corregido: Nombre del archivo incorrecto
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';


import Prueba from './componenters/Prueba/Prueba';

export const CartContext = createContext();


function App() {
  const [count, setCount] = useState(0)
  const [cart, setCart] = useState([]);

/*sumar productos al carrito*/
const addItem = (productToAdd) => {
  if(!isInCart(productToAdd.id)){
    setCart( prev => [...prev, productToAdd])
  }else{
    console.log("El producto ya esta en el carrito");
  }
}

const isInCart = (id) =>{
  return cart.some(prod => prod.id === id)
}

/*Eliminar productos del carrito*/
const removeItem = (id) => {
  const cartUpdated = cart.filter(prod => prod.id === id);
  setCart(cartUpdated);
}

return (
    <>
    <BrowserRouter>
    <CartContext.Provider value={{addItem, isInCart, removeItem}}>
      <NavBar/>
      <Routes>            
        <Route path="/" element={<ItemListContainer />} /> // Aquí podría haber una redundancia
        <Route path='/category/:category_id' element={<ItemListContainer/>} /> // Corregido: Si representa una lista de categorías, el nombre puede ser engañoso
        <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
        <Route path="*" element={<h1> :( 404 Not Found</h1>}/> // Corregido: Falta de comillas en el path
      </Routes>
      </CartContext.Provider>
    </BrowserRouter>
  </>
  )
}

export default App
