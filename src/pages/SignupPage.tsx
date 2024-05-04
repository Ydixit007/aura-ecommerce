import { Link } from "react-router-dom";

const SignupPage = () => {
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
            Welcome
          </h1>
          <p className="text-center text-gray-500">
            Please fill details to create account.
          </p>
        </div>
        <div className="login-form mt-10 flex flex-col gap-2">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-sm">Select your gender*</span>
            </div>
            <select className="select w-full outline outline-1">
              <option disabled selected>
                Select
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-sm">Date of birth*</span>
            </div> 
            <input
              className="select w-full outline outline-1"
              type="date"
              name=""
              id=""
            />
          </label>

          <button className="btn btn-outline px-20 border-2 mb-2 mt-2 border-blue-400 relative">
            <span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://cdn-teams-slug.flaticon.com/google.jpg"
                alt="google sign-in"
              />
            </span>
            Sign-up with Google
          </button>
          <hr />
          <Link className="btn btn-ghost mt-2" to={"/login"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
