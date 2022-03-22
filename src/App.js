import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './stylesFolder/App.css';
import LandingPage from "./components/LandingPage";
import Footer from "./components/commons/Footer";
import AboutUs from "./components/AboutUs";
import EventsPage from "./components/EventsPage";
import Header from "./components/Header";
import About from "./pages/About";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Club from "./pages/Club";
import Photo from "./pages/Photo";
import Partner from "./pages/Partner";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route  path="/about" element={<About />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="/club" element={<Club />} />
          <Route  path="/partner" element={<Photo />} />
          <Route  path="/photo" element={<Partner />} />
        </Routes>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
