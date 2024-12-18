import React from "react"
import {Routes,Route} from 'react-router-dom'
import Home from "./components/Home"
import Faq from "./routes/Faq.jsx"
import Pricing from "./routes/Pricing.jsx"
import Contact from "./routes/ContactForm.jsx"

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/faq' element={<Faq />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
