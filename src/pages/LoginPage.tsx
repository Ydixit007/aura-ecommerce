import { auth } from "@/firebase";
import { getUser } from "@/redux/api/user";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const loginHandler = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const { user } = await signInWithPopup(auth, provider);
      if (!user) {
        toast.error("Error in sign-in");
        return;
      }
      const exisitingUser = await getUser(user.uid);
      if (exisitingUser.success) {
        toast.success(`Welcome back! ${exisitingUser.user.name}`);
        navigate("/");
      } else {
        signOut(auth);
        toast.error("User doesn't exists, Please signup first.");
        navigate("/signup");
      }
    } catch (err) {
      signOut(auth);
      toast.error("User doesn't exists, Please signup first.");
      navigate("/signup");
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
            Welcome Back!
          </h1>
          <p className="text-center text-gray-500">
            Sign in with your existing account.
          </p>
        </div>
        <div className="login-form mt-10 flex flex-col gap-2">
          <button
            onClick={loginHandler}
            className="btn btn-outline px-20 border-2 mb-2 mt-2 border-blue-400 relative"
          >
            <span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
                alt="google sign-in"
              />
            </span>
            login with Google
          </button>
          <hr />
          <Link className="btn btn-ghost mt-2" to={"/signup"}>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
