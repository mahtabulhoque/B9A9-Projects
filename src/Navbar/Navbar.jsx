import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut= () =>{
       logOut()
       .then()
       .catch()
  }
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/update-profile">Update profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-500 rounded-box w-52 border text-xl"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-[#bb1515] font-bold text-5xl">
          Homies
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>

        {
          user ? 
          <button onClick={handleLogOut} className="btn">Log Out</button>
         : 
          <Link to="/update-profile">
            <button className="btn">Login</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
