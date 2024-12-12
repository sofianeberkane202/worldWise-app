import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import PricingPage from "./pages/PricingPage"
import LoginPage from "./pages/LoginPage"
import TravelPage from "./pages/TravelPage"
import Cities from "./components/Cities"
import Countries from './components/Countries'

/* eslint-disable react/react-in-jsx-scope */
export default function App(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path="/product" element={<ProductsPage/>}/>
      <Route path='/pricing' element= {<PricingPage/>}/>
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/travel" element={<TravelPage/>}>

        <Route path="cities" element={<Cities/>}/>
        <Route path="countries" element={<Countries/>}/>

      </Route>
    </Routes>
   </BrowserRouter> 
  )
}