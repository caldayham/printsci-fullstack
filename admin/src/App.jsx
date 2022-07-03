import HomePage from "./pages/HomePage/HomePage";
import RevenuePage from "./pages/RevenuePage/RevenuePage";

import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";

import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import ScrollToTop from "./tools/ScrollToTop";

const App = () => {

  return (
    <Router style={{ position: "relative" }}>
      <SideNav />
      <Header />
      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/revenue" element={<RevenuePage />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
