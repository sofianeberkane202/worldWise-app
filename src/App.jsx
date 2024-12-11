import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
<<<<<<< Updated upstream
=======
import PricingPage from "./pages/PricingPage"
>>>>>>> Stashed changes

/* eslint-disable react/react-in-jsx-scope */
export default function App(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/product" element={<ProductsPage/>}/>
<<<<<<< Updated upstream
=======
      <Route path='/pricing' element= {<PricingPage/>}/>
>>>>>>> Stashed changes
    </Routes>
   </BrowserRouter> 
  )
}