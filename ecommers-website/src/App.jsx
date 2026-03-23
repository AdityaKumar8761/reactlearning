import { Routes , Route } from 'react-router'
import { useEffect , useState } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/orders'
import { Addbutton } from './pages/Addbutton'

import  axios from 'axios'

function App() {
      const [ cart, setCart] = useState([])

      const loadCart = async () => {
        const response = await axios.get('/api/cart-items?expand=product')  //query parimeter 
        setCart(response.data)
      };

      useEffect(()=>{
        loadCart();
      },[]);



  return (
    <Routes>
      <Route index element={<HomePage cart = {cart} loadCart={loadCart} />}/>
      <Route path="checkout" element={ <Checkout cart = {cart}/>}/>
      <Route path="orders" element={ <Orders/>} />
      <Route path='button' element={ <Addbutton/> } />
    </Routes>
  )
}

export default App
