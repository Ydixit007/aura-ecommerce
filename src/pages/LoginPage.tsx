import { auth } from "@/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      
    } catch (error) {
      toast.error("Sign in failed");
    }
  };

  return (
    <div className="max-w-7xl container-custom mx-auto px-4 md:px-8 lg:px-12 h-screen w-full flex items-center antialiased">
      <div className="image-container flex-1 h-[80%] relative overflow-hidden rounded-[5rem] shadow-sm shadow-slate-700/1">
        <img
          className="absolute w-full h-full object-cover"
          src="./assets/sale.jpg"
          alt="login page banner"
          loading="eager"
        />
      </div>
      <div className="login flex-1 flex flex-col w-full h-[80%] items-center justify-center">
        <div className="headings">
          <h1 className="uppercase font-semibold text-4xl z-10 max-sm:leading-normal leading-snug max-sm:text-5xl titled-2 py-2 mb-2 text-center">
            Welcome Back
          </h1>
          <p className="text-center text-gray-500">
            Please login to your account
          </p>
        </div>
        <div className="login-form mt-10 flex flex-col">
          <button
            onClick={loginHandler}
            className="btn btn-outline px-20 border-2 border-blue-400 relative"
          >
            <span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
                alt="google sign-in"
              />
            </span>
            Login with Google
          </button>
          <Link className="btn btn-ghost mt-2" to={"/signup"}>Signup Today</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
