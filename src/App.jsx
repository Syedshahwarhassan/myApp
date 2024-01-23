import "./App.css"
import About from "./components/About"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Product from "./components/Product"
const app=()=>{
  return(
 
    <div className="text-center">

    <Navbar/>
   <Home/>
   <About/>
   <Product/> 
 
    </div>
  )
}
export default app