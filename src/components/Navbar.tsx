import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100 fixed top-0 w-full max-w-7xl left-[50%] translate-x-[-50%] px-4 md:px-8 lg:px-12">
      <div className="navbar-start">
        {/* Mobile dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Women</Link>
            </li>
            <li>
              <Link to={"/"}>Mens</Link>
            </li>
            <li>
              <Link to={"/"}>Fashion</Link>
            </li>
            <li>
              <Link to={"/"}>Categories</Link>
            </li>
          </ul>
        </div>
        <Link to={""} className="btn btn-ghost text-2xl font-black">Aura</Link>
      </div>
      <div className="navbar-center hidden lg:flex uppercase">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/"}>Women</Link>
          </li>
          <li>
            <Link to={"/"}>Mens</Link>
          </li>
          <li>
            <Link to={"/"}>Fashion</Link>
          </li>
          <li>
            <Link to={"/"}>Categories</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-neutral font-normal">Sign up</a>
      </div>
    </nav>
  );
};

export default Navbar;
