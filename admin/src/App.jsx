import HomePage from "./pages/HomePage/HomePage";
import RevenuePage from "./pages/RevenuePage/RevenuePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AccountPage from "./pages/AccountPage/AccountPage";

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
          <Route exact path="/*" element={<PrivateRoute />} />
        </Routes>
        {isAdmin() && (
          <>
            <ScrollToTop />
            <Header />
            <div style={{ display: "flex" }}>
              <SideNav />
              <Routes>
                {/* DASHBOARD ROUTES */}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/crud" element={<HomePage />} />
                <Route exact path="/analytics" element={<HomePage />} />
                <Route exact path="/notifications" element={<HomePage />} />
                {/* CRUD DATA ROUTES */}
                <Route exact path="crud/users" element={<RevenuePage />} />
                <Route exact path="crud/products" element={<RevenuePage />} />
                <Route exact path="crud/orders" element={<RevenuePage />} />
                <Route
                  exact
                  path="crud/transactions"
                  element={<RevenuePage />}
                />
                <Route exact path="crud/research" element={<RevenuePage />} />
                {/* ANALYTICS ROUTES */}
                <Route
                  exact
                  path="/analytics/revenue"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/analytics/demographics"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/analytics/site-data"
                  element={<RevenuePage />}
                />
                {/* NOTIFICATIONS ROUTES */}
                <Route
                  exact
                  path="/notifications/email"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/notifications/social-media"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/notifications/site-forms"
                  element={<RevenuePage />}
                />
                {/* TEAM ROUTES */}
                <Route exact path="/team/software" element={<RevenuePage />} />
                <Route
                  exact
                  path="/team/manufacturing"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/team/sales-marketing"
                  element={<RevenuePage />}
                />
                <Route
                  exact
                  path="/team/customer-satisfaction"
                  element={<RevenuePage />}
                />
                {/* OTHER ROUTES */}
                <Route exact path="/account" element={<AccountPage />} />
              </Routes>
            </div>
          </>
        )}
      </Fragment>
    </Router>
  );
};

export default App;
