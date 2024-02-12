import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componenters/Navbar/Navbar'
import { ItemListConstainer } from './componenters/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <NavBar/>
          <ItemListConstainer greeting='App en proceso de desarrollo'/>
    </>
  )
}

export default App
