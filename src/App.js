import React from "react"
import { Routes, Route } from "react-router-dom"

import MenuPrimary from "./components/ui/MenuPrimary"

import HomePage from "./components/pages/Home"
import AboutUs from "./components/pages/Aboutus"
import Future from "./components/pages/Future"
import Error from "./components/pages/Error"




function App() {
  return (
    
    <div>
      <nav>
        
        <MenuPrimary />
      </nav>
      
      <Routes>
      
      <Route path="*" element={<Error /> } />
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/future" element={<Future />} />
      
      
      </Routes>

    </div>


 
  )

}

export default App
