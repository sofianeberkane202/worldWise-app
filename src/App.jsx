import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
<<<<<<< HEAD
import ProductsPage from "./pages/ProductsPage"
=======
import PricingPage from "./pages/PricingPage"
>>>>>>> pricingPage

/* eslint-disable react/react-in-jsx-scope */
export default function App(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
<<<<<<< HEAD
      <Route path="/product" element={<ProductsPage/>}/>
=======
      <Route path='/pricing' element= {<PricingPage/>}/>
>>>>>>> pricingPage
    </Routes>
   </BrowserRouter> 
  )
}