import React from "react";
import Transfer from "../pages/new-transfer/New-Transfer";
import Terms from "../pages/terms/Terms";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import TopNav from "../topnav/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import NotFound from "../pages/notfound/Notfound";
import LoginPage from "../user/login/LoginPage";
import Dash from  "../Auth/Dashboard/Dash"

const AppRouter = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/new-transfer" element={<Transfer />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
