import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice.js";
import { Link } from "react-router-dom";

function Wishlist() {
  const wishlistData = useSelector((state) => state.wishlist.value || []);
  const dispatch = useDispatch();

  return (
    <>
      <ShopBgHero title="Wishlist" />

      <table className="w-4/5 max-w-full mx-auto mt-16 mb-24">
        <thead>
          <tr className="bg-wheat ">
            <th className="font-medium py-4 px-6 text-left">Product</th>
            <th className="font-medium py-4 px-6 text-left">Price</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {wishlistData.length === 0 ? (
            <tr>
              <td
                colSpan={5}
                className="text-center text-xl text-slate-400 py-6"
              >
                <p>No items added yet</p>
              </td>
            </tr>
          ) : (
            wishlistData.map((item) => (
              <tr key={item.id} className="relative hover:bg-slate-100">
                <td className="py-6">
                  <div className="flex items-center gap-2">
                    <img
                      src={item.images[0]}
                      className="bg-wheat rounded-lg w-[100px] h-[100px] object-cover object-center"
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                </td>
                <td className="p-6">
                  Rs.{" "}
                  {(item.price * (1 - item.discountPercentage / 100)).toFixed(
                    2,
                  )}
                </td>
                <td className="p-6 text-center">
                  <Tooltip title="Remove from Wishlist" arrow>
                    <button
                      onClick={() => dispatch(removeFromWishlist(item.id))}
                      aria-label="Remove from Wishlist"
                      className="inline-block align-middle group relative z-10 p-4"
                    >
                      <GoHeart className="text-dark text-xl hidden group-hover:inline" />
                      <GoHeartFill className="text-dark text-xl group-hover:hidden" />
                    </button>
                  </Tooltip>
                </td>
                <td className="ps-6 text-right">
                  <button
                    onClick={() =>
                      dispatch(addToCart({ ...item, quantity: 1 }))
                    }
                    className="bg-dark text-white relative z-10 px-4 py-2"
                  >
                    Add to Cart
                  </button>
                </td>

                <Link
                  to={`/products/${item.id}`}
                  className="absolute inset-0"
                  aria-label={`View ${item.title}`}
                />
              </tr>
            ))
          )}
        </tbody>
      </table>

      <ShopBgFooter title="Cart" />
    </>
  );
}

export default Wishlist;
