import  Features  from "./components/Features"
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
 </main>
    </>
  )
}

export default App
