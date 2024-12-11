import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"

/* eslint-disable react/react-in-jsx-scope */
export default function App(){
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element= {<HomePage/>} />
    </Routes>
   </BrowserRouter> 
  )
}