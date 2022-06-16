import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound404Page from "./pages/NotFound404Page/NotFound404Page";
import CustomPage from "./pages/CustomPage/CustomPage";
import ResearchPage from "./pages/ResearchPage/ResearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";

import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = false;

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/catalog/:category" element={<CatalogPage />} />
          <Route exact path="/catalog" element={<CatalogPage />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/custom" element={<CustomPage />} />
          <Route exact path="/research" element={<ResearchPage />} />
          <Route exact path="/about" element={<AboutPage />} />

          <Route exact path="/mycart" element={<CartPage />} />
          <Route exact path="/checkout" element={<CartPage />} />

          <Route exact path="/tos" element={<CartPage />} />
          <Route exact path="/privacy" element={<CartPage />} />
          <Route exact path="/returns" element={<CartPage />} />

          <Route
            exact
            path="/login"
            element={user ? <Navigate to="/" /> : <LoginRegisterPage />}
          />
          <Route
            exact
            path="/register"
            element={user ? <Navigate to="/" /> : <LoginRegisterPage />}
          />

          <Route exact path="/*" element={<NotFound404Page />} />
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
