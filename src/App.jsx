import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import PricingPage from "./pages/PricingPage"
import LoginPage from "./pages/LoginPage"
import TravelPage from "./pages/TravelPage"
import Cities from "./components/Cities"
import Countries from './components/Countries'
import City from "./components/City"
import { createContext, useEffect, useState } from "react"
import { URL } from "./config"

/* eslint-disable react/react-in-jsx-scope */

// step1 : create context
export const ContextCities = createContext();

export default function App(){

  const [cities, setCities]= useState([]);

  useEffect(function(){
    async function fetchCitiesData(){
      try {
        const response = await fetch(URL);
        if(!response.ok) throw new Error('No fetch Data');
        
        const data = await response.json();
        
        setCities(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCitiesData();
  },[]);

  return (
   <BrowserRouter>
      <ContextCities.Provider
      value={{
        cities,
      }}
      >
        <Routes>
          <Route path="/" element= {<HomePage/>} />
          <Route path="/product" element={<ProductsPage/>}/>
          <Route path='/pricing' element= {<PricingPage/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/travel" element={<TravelPage/>}>
              <>
                <Route index element={<Cities />}/>
                <Route path="cities" element={<Cities />}/>
                <Route path="cities/:id" element={<City/>} />{/* Dynamic route for city details */}
                <Route path="countries" element={<Countries />}/>
              </>


          </Route>
        </Routes>
    </ContextCities.Provider>  
   </BrowserRouter> 
  )
}