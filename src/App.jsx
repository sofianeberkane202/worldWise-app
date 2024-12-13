import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import PricingPage from "./pages/PricingPage"
import LoginPage from "./pages/LoginPage"
import TravelPage from "./pages/TravelPage"
import Cities from "./components/Cities"
import Countries from './components/Countries'
import City from "./components/City"

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

        <Route index element={<Cities/>}/>
        <Route path="cities" element={<Cities/>}/>
        <Route path="cities/:id" element={<City/>} />{/* Dynamic route for city details */}
        <Route path="countries" element={<Countries/>}/>

      </Route>
    </Routes>
   </BrowserRouter> 
  )
}