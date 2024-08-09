import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";
import Contact from "./pages/Contact";
import AboutPage from "./pages/AboutUs";
import Services from "./pages/Services";
import JobListing from "./pages/JobListing";
import JobDetails from "./pages/JobDetails";
import LoginPage from "./pages/Login";

function App() {
  return(
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}  />
          <Route path="/login" Component={LoginPage} />
          <Route path="/contact" Component={Contact}  />
          <Route path="/about" Component={AboutPage}  />
          <Route path="/services" Component={Services} />
          <Route path="/joblist" Component={JobListing} />
          <Route path="/jobdetail" Component={JobDetails} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App;