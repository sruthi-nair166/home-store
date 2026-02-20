import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Meubel House_Logos-05.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 z-20">
      <nav className="flex justify-between items-center px-12 py-6 w-screen bg-white">
        <div className="flex items-center gap-1.5">
          <img src={Logo} alt="" />
          <Link to="/" className="text-4xl font-bold font-logo">
            Furniro
          </Link>
        </div>

        <ul className="flex gap-10">
          <li>
            <Link to="/" className="font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="font-medium">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/" className="font-medium">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium">
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex gap-10">
          <IoPersonOutline className="text-xl" />
          <IoSearchOutline className="text-xl" />
          <GoHeart className="text-xl" />
          <AiOutlineShoppingCart className="text-xl" />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
