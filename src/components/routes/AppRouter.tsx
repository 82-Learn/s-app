import React from "react";
import Accounts from "../pages/account/Accounts";
import Terms from "../pages/terms/Terms";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import TopNav from "../topnav/TopNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../home/HomePage";
import NotFound from "../pages/notfound/Notfound";
import Dash from "../dashboard/Dash";

const AppRouter = () => {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
