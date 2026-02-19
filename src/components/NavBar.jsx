import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Logo from "../assets/Meubel House_Logos-05.png";

function NavBar() {
  return (
    <>
      <nav className="flex justify-between items-center px-12 py-6">
        <div className="flex items-center gap-1.5">
          <img src={Logo} alt="" />
          <a href="" className="text-4xl font-bold font-logo">
            Furniro
          </a>
        </div>

        <ul className="flex gap-10">
          <li>
            <a href="" className="font-medium">
              Home
            </a>
          </li>
          <li>
            <a href="" className="font-medium">
              Shop
            </a>
          </li>
          <li>
            <a href="" className="font-medium">
              About
            </a>
          </li>
          <li>
            <a href="" className="font-medium">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex gap-10">
          <IoPersonOutline className="text-xl" />
          <IoSearchOutline className="text-xl" />
          <GoHeart className="text-xl" />
          <AiOutlineShoppingCart className="text-xl" />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
