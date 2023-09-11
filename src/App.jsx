import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About';
import Blog from "./components/Blog";
import Services from "./components/Services";
import Contactus from "./components/Contactus";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact="true" path="/" element={<Home/>}></Route>
          <Route exact="true" path="/about" element={<About/>}></Route>
          <Route exact="true" path="/services" element={<Services/>}></Route>
          <Route exact="true" path="/contact" element={<Contactus/>}></Route>
          <Route exact="true" path="/blog" element={<Blog/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
