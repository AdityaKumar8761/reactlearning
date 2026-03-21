import { Routes , Route } from 'react-router'
import { useEffect , useState } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/orders'

import  axios from 'axios'

function App() {
      const [ cart, setCart] = useState([])

      useEffect(()=>{
        axios.get('/api/cart-items?expand=product')  //query parimeter 
        .then((response) => {
            setCart(response.data)
    })
      }, [])



  return (
    <Routes>
      <Route index element={<HomePage cart = {cart}/>}/>
      <Route path="checkout" element={ <Checkout cart = {cart}/>}/>
      <Route path="orders" element={ <Orders/>} />
    </Routes>
  )
}

export default App
