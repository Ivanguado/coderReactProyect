
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './componenters/Navbar/Navbar'
import ItemListContainer from './componenters/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componenters/ItemDetailConteiner/ItemDetailContainer'; // Corregido: Nombre del archivo incorrecto
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import { CartProvider } from './context/CartContext'

import Prueba from './componenters/Prueba/Prueba';
import { ItemDetailWidger } from './componenters/ItemDetailWidger/ItemDetailWidger';


function App() {
//  const [count, setCount] = useState(0)
  
return (
    <>
    <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>            
        <Route path="/" element={<ItemListContainer />} /> // Aquí podría haber una redundancia
        <Route path='/category/:category_id' element={<ItemListContainer/>} /> // Corregido: Si representa una lista de categorías, el nombre puede ser engañoso
        <Route path="/detail/:productId" element={<ItemDetailContainer/>} />
        <Route path='/ItemDetailWidger' element={<ItemDetailWidger/>} />
        <Route path="*" element={<h1> :( 404 Not Found</h1>}/> // Corregido: Falta de comillas en el path
      </Routes>
      </CartProvider>
    </BrowserRouter>
  </>
  )
}

export default App
