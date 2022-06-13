import HomePage from "./pages/HomePage/HomePage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import LoginRegisterPage from "./pages/LoginRegisterPage/LoginRegisterPage";
import CartPage from "./pages/CartPage/CartPage";
import NotFound404Page from "./pages/NotFound404Page/NotFound404Page";

import { Body } from "./globalStyles";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <HomePage />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
