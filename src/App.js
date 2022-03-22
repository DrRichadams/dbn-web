import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './stylesFolder/App.css';
import LandingPage from "./components/LandingPage";
import Footer from "./components/commons/Footer";
import AboutUs from "./components/AboutUs";
import EventsPage from "./components/EventsPage";
<<<<<<< HEAD
import Header from "./components/Header";
import About from "./pages/About";
import Events from "./pages/Events";
import Blog from "./pages/Blog";
import Club from "./pages/Club";
import Photo from "./pages/Photo";
import Partner from "./pages/Partner";
=======
import ClubCharter from "./components/ClubCharter";
import BlogPosts from "./components/BlogPosts";
import PhotoGallery from "./components/PhotoGallery";
>>>>>>> 7eb3fbb7f937cb3e7d47eb95d805d6e92f626c74

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Routes>
          <Route exact path="/" element={<LandingPage />} />
<<<<<<< HEAD
          <Route  path="/about" element={<About />} />
          <Route  path="/events" element={<Events />} />
          <Route  path="/blog" element={<Blog />} />
          <Route  path="/club" element={<Club />} />
          <Route  path="/partner" element={<Photo />} />
          <Route  path="/photo" element={<Partner />} />
=======
          <Route  path="/about" element={<AboutUs />} />
          <Route  path="/events" element={<EventsPage />} />
          <Route  path="/clubCharter" element={<ClubCharter />} />
          <Route  path="/blogPosts" element={<BlogPosts />} />
          <Route  path="/photoGallery" element={<PhotoGallery />} />
>>>>>>> 7eb3fbb7f937cb3e7d47eb95d805d6e92f626c74
        </Routes>
        <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
