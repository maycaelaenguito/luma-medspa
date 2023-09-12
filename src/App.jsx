import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contactus from "./components/Contactus";
import Shop from './components/Shop';
import Booking from './components/Booking';
import Gallery from './components/Gallery';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contactus/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/booking" element={<Booking/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>

        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
