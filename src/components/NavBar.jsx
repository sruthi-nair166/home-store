import { useState } from "react";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 shadow-md z-20">
      <nav className="flex justify-between items-center px-12 py-6 w-screen bg-white">
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} className="h-7" alt="" />
          <span className="text-2xl font-bold font-logo">Havenly</span>
        </Link>

        <ul className="hidden lg:flex gap-10">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 font-medium border-dark pb-6"
                  : "font-medium border-0 hover:text-dark transition"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 font-medium border-dark pb-6"
                  : "font-medium border-0 hover:text-dark transition"
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="font-medium hover:text-dark transition">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "border-b-4 font-medium border-dark pb-6"
                  : "font-medium border-0 hover:text-dark transition"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="hidden lg:flex gap-10">
          <Tooltip title="Wishlist" arrow>
            <Link to="/wishlist" aria-label="Wishlist">
              <GoHeart className="text-xl hover:text-dark" />
            </Link>
          </Tooltip>

          <Tooltip title="Cart" arrow>
            <Link to="/cart" aria-label="Cart">
              <AiOutlineShoppingCart className="text-xl hover:text-dark" />
            </Link>
          </Tooltip>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="relative lg:hidden">
          <div className="absolute right-0 w-64 bg-white shadow-lg z-30">
            <ul className="flex flex-col text-right">
              <li className="hover:bg-slate-100 w-full">
                <NavLink
                  className="flex w-full justify-end py-4 pe-12"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li className="hover:bg-slate-100 w-full">
                <NavLink
                  className="flex w-full justify-end py-4 pe-12"
                  to="/shop"
                  onClick={() => setIsOpen(false)}
                >
                  Shop
                </NavLink>
              </li>

              <li className="hover:bg-slate-100 w-full">
                <NavLink
                  className="flex w-full justify-end py-4 pe-12"
                  to="/"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>

              <li className="hover:bg-slate-100 w-full">
                <NavLink
                  className="flex w-full justify-end py-4 pe-12"
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </NavLink>
              </li>

              <div className="flex justify-end gap-6 py-6 pe-12 border-t">
                <Link to="/wishlist" onClick={() => setIsOpen(false)}>
                  <GoHeart className="text-xl" />
                </Link>

                <Link to="/cart" onClick={() => setIsOpen(false)}>
                  <AiOutlineShoppingCart className="text-xl" />
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
