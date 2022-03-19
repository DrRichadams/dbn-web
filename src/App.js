import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './stylesFolder/App.css';
import MainNav from './components/commons/MainNav';
import LandingPage from "./components/LandingPage";
import Footer from "./components/commons/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNav />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
