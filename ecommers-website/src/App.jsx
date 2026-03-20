import { Routes , Route } from 'react-router'

import './App.css'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'
import { Orders } from './pages/orders'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="checkout" element={ <Checkout/>}/>
      <Route path="orders" element={ <Orders/>} />
    </Routes>
  )
}

export default App
