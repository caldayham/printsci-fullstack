import HomePage from "./pages/HomePage/HomePage";
import RevenuePage from "./pages/RevenuePage/RevenuePage";
import LoginPage from "./pages/LoginPage/LoginPage";

import PrivateRoute from "./components/PrivateRoute";
import SideNav from "./components/SideNav/SideNav";
import Header from "./components/Header/Header";

import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ScrollToTop from "./tools/ScrollToTop";
import isAdmin from "./tools/isAdmin";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
        {isAdmin() && (
          <>
            <ScrollToTop />
            <Header />
            <div style={{ display: "flex" }}>
              <SideNav />
              <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                  <Route exact path="/" element={<HomePage />} />
                  <Route exact path="/home" element={<HomePage />} />
                  <Route exact path="/revenue" element={<RevenuePage />} />
                </Route>
              </Routes>
            </div>
          </>
        )}
      </Fragment>
    </Router>
  );
};

export default App;
