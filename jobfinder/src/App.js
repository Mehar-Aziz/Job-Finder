import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
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
import ResetPasswordpage from "./pages/ResetPassword";
import ForgotPasswordpage from "./pages/ForgetPassword";

function App() {
  const [usersData, setUsersData] = useState([]);
  const [servicesData, setServicesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersResponse, servicesResponse] = await Promise.all([
          axios.get("http://localhost:3000/api/users"),
          axios.get("http://localhost:3000/api/services"),
        ]);

        setUsersData(usersResponse.data);
        setServicesData(servicesResponse.data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    fetchData();
  }, []);
  return (
    <AuthProvider>
     
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="/login" Component={LoginPage} />
              <Route path="/forgot-password" Component={ForgotPasswordpage} />
              <Route
                path="/reset-password/:token"
                Component={ResetPasswordpage}
              />
              <Route path="/dashboard" Component={Dashboard} />
              <Route path="/profile/:id" Component={Profile} />
              <Route path="/registration" Component={RegistrationForm} />
              <Route path="/contact" Component={Contact} />
              <Route path="/about" Component={AboutPage} />
              <Route path="/services" Component={Services} />
              <Route path="/joblist" Component={JobListing} />
              <Route path="/jobdetail" Component={JobDetails} />
            </Routes>
            <Footer />
          </div>
        </Router>
      
    </AuthProvider>
  );
}
export default App;
