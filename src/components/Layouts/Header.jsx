import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import { NavLink } from "react-router";
import { DataContext } from "../../contextApi/contextApi";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase.config";

const Header = () => {
  const [loading, setLoading] = React.useState(false);
  const { userData } = useContext(DataContext);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const handlelogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User signed out successfully");
        setLoading(false);
      })
      .catch((error) => {
        // An error happened
        console.log("Error during logout:", error.message);
      });
  };

  if (userData) {
    console.log("User is logged in:", userData);
  }
  return (
    <header>
      <nav className="flex items-center justify-between  bg-white shadow-md rounded-md p-4">
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className="text-[#1E1E1E] hover:text-[#EF2E48]"
                activeClassName="text-[#EF2E48] font-bold"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <img src={logo} alt="coffee shop logo" className="h-[60px]" />
        <div className="flex items-center space-x-4">
          {userData !== null ? (
            <NavLink
              className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg"
              onClick={handlelogout}
            >
              {`logout, ${userData.displayName}`}
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="text-[#1E1E1E] hover:text-[#EF2E48] text-lg"
            >
              Login/Signup
            </NavLink>
          )}
          <button className="text-[#1E1E1E] hover:text-[#EF2E48] cursor-pointer">
            <img src={search} alt="" />
          </button>
          <NavLink to="/cart" className="text-[#1E1E1E] hover:text-[#EF2E48]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
