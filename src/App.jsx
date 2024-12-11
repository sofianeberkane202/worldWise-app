import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import PricingPage from "./pages/PricingPage"

/* eslint-disable react/react-in-jsx-scope */
export default function App(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
      <Route path='/pricing' element= {<PricingPage/>}/>
    </Routes>
   </BrowserRouter> 
  )
}