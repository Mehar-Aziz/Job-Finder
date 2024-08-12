import React,{ useEffect, useState }  from "react";
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
import RegistrationForm from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import AuthProvider from "./context/UserContext";


function App() {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:3000/api/users") 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setBackendData(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
  }, []);
  return(
    <AuthProvider>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home}  />
          <Route path="/login" Component={LoginPage} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path="/profile" Component={Profile} />
          <Route path="/registration" Component={RegistrationForm} />
          <Route path="/contact" Component={Contact}  />
          <Route path="/about" Component={AboutPage}  />
          <Route path="/services" Component={Services} />
          <Route path="/joblist" Component={JobListing} />
          <Route path="/jobdetail" Component={JobDetails} />
  
        </Routes>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  )
}
export default App;