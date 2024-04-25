import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const CartPage = lazy(() => import("./pages/CartPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
