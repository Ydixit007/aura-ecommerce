import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import { lazy, Suspense, useEffect } from "react";
import Loading from "./components/Loading";
import { Toaster } from "react-hot-toast";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { loginUser, logoutUser } from "./redux/reducer/userReducer";
import { getUser } from "./redux/api/user";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { userReducerInitialState } from "./types/reducer-types";
import ProfilePage from "./pages/ProfilePage";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state: { userReducer: userReducerInitialState }) => state.userReducer
  );

  // check if user exisits
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await getUser(user.uid);
        dispatch(loginUser(data.user));
      } else {
        dispatch(logoutUser());
      }
    });
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Navbar user={user}></Navbar>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route
            path="/login"
            element={user ? <LandingPage /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={user ? <LandingPage /> : <SignupPage />}
          />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          {/* admin routes */}
        </Routes>
      </Suspense>
      <Toaster containerClassName="z-50" position="bottom-right" />
    </Router>
  );
};

export default App;
