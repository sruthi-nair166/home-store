import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import product1 from "../assets/Mask group.png";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";

function Wishlist() {
  return (
    <>
      <ShopBgHero title="Wishlist" />

      <table className="w-4/5 max-w-full mx-auto mt-16 mb-24">
        <thead>
          <tr className="bg-wheat ">
            <th className="font-medium py-4 px-6 text-left">Product</th>
            <th className="font-medium py-4 px-6 text-left">Price</th>
            <th className="font-medium py-4 px-6 text-center">Quantity</th>
            <th className="font-medium py-4 px-6 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-6">
              <div className="flex items-center gap-2">
                <img src={product1} className="bg-wheat rounded-lg" alt="" />
                <p>Product Name</p>
              </div>
            </td>
            <td className="p-6">Rs. 25,000.00</td>
            <td className="p-6 text-center">
              <span className="border-2 rounded-md px-4 py-2">1</span>
            </td>
            <td className="p-6">Rs. 25,000.00</td>
            <td className="p-6">
              <Tooltip title="Remove from Wishlist" arrow>
                <button
                  aria-label="Remove from Wishlist"
                  className="inline-block align-middle group"
                >
                  <GoHeart className="text-dark text-xl hidden group-hover:inline" />
                  <GoHeartFill className="text-dark text-xl group-hover:hidden" />
                </button>
              </Tooltip>
            </td>
            <td>
              <button className="bg-dark text-white px-4 py-2 text-center">
                Add to Cart
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <ShopBgFooter title="Cart" />
    </>
  );
}

export default Wishlist;
