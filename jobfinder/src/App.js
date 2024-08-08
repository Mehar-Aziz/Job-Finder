import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}  />
          <Route path="/contact" Component={Contact}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;