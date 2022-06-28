import HomePage from "./pages/HomePage/HomePage";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound404Page from "./pages/NotFound404Page/NotFound404Page";
import CustomPage from "./pages/CustomPage/CustomPage";
import ResearchPage from "./pages/ResearchPage/ResearchPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ServiceTermsPage from "./pages/StaticPages/ServiceTermsPage";
import ReturnPolicyPage from "./pages/StaticPages/ReturnPolicyPage";
import PrivacyPolicyPage from "./pages/StaticPages/PrivacyPolicyPage";

import Announcement from "./components/Announcement/Announcement";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

import LoginRegisterOverlay from "./pages/LoginRegisterPage/LoginRegisterOverlay";

import React, { Fragment, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./tools/ScrollToTop";

const App = () => {
  const user = false;
  const [isShowLoginOverlay, setIsShowLoginOverlay] = useState(false);

  const handleLoginClick = () => {
    setIsShowLoginOverlay((isShowLoginOverlay) => !isShowLoginOverlay);
  };

  return (
    <Router style={{ position: "relative" }}>
      <Announcement />
      <Navbar setIsShowLoginOverlay={setIsShowLoginOverlay} />

      {isShowLoginOverlay ? (
        <LoginRegisterOverlay setIsShowLoginOverlay={setIsShowLoginOverlay} />
      ) : (
        <div />
      )}
      <Fragment>
        <ScrollToTop />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home" element={<HomePage />} />
          <Route exact path="/catalog/:category" element={<CatalogPage />} />
          <Route exact path="/catalog" element={<CatalogPage />} />
          <Route exact path="/product/:id" element={<ProductPage />} />
          <Route exact path="/custom" element={<CustomPage />} />
          <Route exact path="/research" element={<ResearchPage />} />

          <Route exact path="/mycart" element={<CartPage />} />
          <Route exact path="/checkout" element={<CartPage />} />

          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/about/terms" element={<ServiceTermsPage />} />
          <Route exact path="/about/privacy" element={<PrivacyPolicyPage />} />
          <Route exact path="/about/return" element={<ReturnPolicyPage />} />

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

      <Newsletter />
      <Footer />
    </Router>
  );
};

export default App;
