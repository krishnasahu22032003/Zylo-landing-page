import Contact from "./components/Contact"
import CTA from "./components/CTA"
import  Features  from "./components/Features"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Pricing from "./components/Pricing"
import WhyZylo from "./components/WhyZylo"

import ZyloInAction from "./components/ZyloInAction"

function App() {


  return (
    <>
 <main className="w-autp overflow-x-hidden " >
<Navbar/>
<Hero/>
<ZyloInAction/>
<Features/>
<WhyZylo/>
<Pricing/>
<Contact/>
<CTA/>
<Footer/>
 </main>
    </>
  )
}

export default App
