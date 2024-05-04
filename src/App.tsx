import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import {Toaster} from "react-hot-toast";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* admin routes */}
          
        </Routes>
      </Suspense>
      <Toaster containerClassName="z-50" position="bottom-right" />
    </Router>
  );
};

export default App;
