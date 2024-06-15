import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"

import HomePage from "./pages/LandingPage/HomePage"
import PropertyPage from "./pages/LandingPage/PropertyPage"
import TestimonialPage from "./pages/LandingPage/TestimonialPage"
// import OurTeamPage from "./pages/OurTeamPage"
import FaqPage from "./pages/LandingPage/FaqPage"

import FooterComponet from "./components/FooterComponent"
import DetailProperty from "./pages/LandingPage/DetailProperty"
import InvoicePage from "./pages/LandingPage/InvoicePage"

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage}/>
        <Route path="/property" Component={PropertyPage}/>
        <Route path="/detail" Component={DetailProperty}/>
        <Route path="/testimonial" Component={TestimonialPage}/>
        <Route path="/faq" Component={FaqPage}/>
        {/* <Route path="/team" Component={OurTeamPage}/> */}
      </Routes>

      <InvoicePage />
      <FooterComponet />
    </div>
  )
}

export default App