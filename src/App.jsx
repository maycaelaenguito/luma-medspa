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
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import ClientRecords from './components/ClientRecords';
import AdminBooking from './components/AdminBooking';
import DashboardShop from './components/DashboardShop';
import DashboardGallery from './components/DashboardGallery';
import DashboardBlog from './components/DashboardBlog';
import Testimonials from './components/Testimonials';

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
          <Route path="/login" element={<Admin/>}></Route>
          <Route path="/dashboard" element={<AdminDashboard/>}></Route>
          <Route path="/dashboard/client-records" element={<ClientRecords/>}></Route>
          <Route path="/dashboard/booking" element={<AdminBooking/>}></Route>
          <Route path="/dashboard/shop" element={<DashboardShop/>}></Route>
          <Route path="/dashboard/gallery" element={<DashboardGallery/>}></Route>
          <Route path="/dashboard/blogs" element={<DashboardBlog/>}></Route>
          <Route path="/dashboard/testimonials" element={<Testimonials/>}></Route>
        </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
