import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Header from "./pages/Header";
import HeaderCarousel from "./pages/HeaderCarousel";
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from "./pages/Footer";

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="about" element={<About/>} />
          <Route path="gallery" element={<Gallery/>}/>
          <Route path="Blog" element={<Blog/>} />
          <Route path="Contact" element={<Contact/>} />
          <Route path="/" element={<HeaderCarousel />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
