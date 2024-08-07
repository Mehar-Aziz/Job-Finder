import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}  />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;