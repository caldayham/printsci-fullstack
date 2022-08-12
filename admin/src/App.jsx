import HomePage from "./pages/HomePage/HomePage";
import RevenuePage from "./pages/RevenuePage/RevenuePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AccountPage from "./pages/AccountPage/AccountPage";

import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";

import UsersPage from "./pages/CRUDPages/UsersPage";
import ProductsPage from "./pages/CRUDPages/Products/ProductsPage";
import ProductPage from "./pages/CRUDPages/Products/ProductPage";
import OrdersPage from "./pages/CRUDPages/OrdersPage";
import TransactionsPage from "./pages/CRUDPages/TransactionsPage";
import ResearchPage from "./pages/CRUDPages/ResearchPage";
import CreateProductPage from "./pages/CRUDPages/Products/CreateProductPage";

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
            <div
              style={{
                display: "flex",
                top: "60px",
                position: "fixed",
                width: "100%",
                height: "calc(100vh - 60px)",
              }}
            >
              <SideNav />
              <Routes>
                {/* DASHBOARD ROUTES */}
                <Route exact path="/" element={<HomePage />} />
                <Route exact path="/home" element={<HomePage />} />
                <Route exact path="/crud" element={<HomePage />} />
                <Route exact path="/analytics" element={<HomePage />} />
                <Route exact path="/notifications" element={<HomePage />} />
                {/* CRUD DATA ROUTES */}
                <Route exact path="/crud/users" element={<UsersPage />} />
                <Route exact path="/crud/products" element={<ProductsPage />} />
                <Route
                  exact
                  path="/crud/products/create"
                  element={<CreateProductPage />}
                />
                <Route
                  exact
                  path="/crud/products/:id"
                  element={<ProductPage />}
                />
                <Route exact path="crud/orders" element={<OrdersPage />} />
                <Route
                  exact
                  path="crud/transactions"
                  element={<TransactionsPage />}
                />
                <Route exact path="crud/research" element={<ResearchPage />} />
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
