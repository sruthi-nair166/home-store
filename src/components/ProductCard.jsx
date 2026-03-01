import { FaRegStar } from "react-icons/fa6";
import { VscArrowSwap } from "react-icons/vsc";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { setColumn1 } from "../features/compare/compareSlice";

function ProductCard({ product, handleClick }) {
  const wishlist = useSelector((state) => state.wishlist.value || []);
  const dispatch = useDispatch();

  const isInWishlist = wishlist.find((item) => item.id === product.id);

  const handleToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist({ ...product, quantity: 1 }));
    }
  };

  const handleCompareClick = () => {
    dispatch(setColumn1(product));
  };

  return (
    <>
      <div className="bg-slate-100 w-full relative group overflow-hidden">
        <img
          src={product.images[0]}
          className="h-[300px] w-full object-cover object-center"
          alt={product.title}
        />

        <div
          className="absolute inset-0 bg-black/60 opacity-0 
                       group-hover:opacity-100 
                       transition-opacity duration-300
                       flex items-center justify-center z-10"
        >
          <Tooltip title="Wishlist" arrow>
            <button
              aria-label="Wishlist"
              className="inline-block align-middle group absolute top-5 right-5"
              onClick={() => {
                handleToggle();
                handleClick(
                  `${product.title} ${
                    isInWishlist ? "removed from Wishlist" : "added to Wishlist"
                  }`,
                  isInWishlist,
                  product,
                )();
              }}
            >
              {isInWishlist ? (
                <GoHeartFill className="text-wheat text-xl" />
              ) : (
                <GoHeart className="text-wheat text-xl" />
              )}
            </button>
          </Tooltip>

          <div className="flex flex-col gap-3">
            <Link
              to={`/products/${product.id}`}
              className="bg-white text-dark hover:bg-dark hover:text-white transition px-14 py-3 font-semibold"
            >
              View Details
            </Link>

            <Link
              to="/comparison"
              onClick={handleCompareClick}
              className="text-white hover:text-dark font-medium px-6 py-2 flex items-center justify-center gap-2"
            >
              <span>
                <VscArrowSwap strokeWidth={0.5} />
              </span>
              <span className="tracking-wider">Compare</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mt-4 pb-6 mx-4 relative z-0">
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-semibold mb-1">{product.title}</h3>
            <p className="flex items-center gap-1">
              <span className="text-lg">{product.rating.toFixed(1)}</span>
              <FaRegStar className="text-dark" />
            </p>
          </div>
          <p className="text-slate-400 mb-4">{product.brand}</p>
          <p className="flex justify-between items-end">
            <span className="text-xl font-semibold">
              Rs{" "}
              {(product.price * (1 - product.discountPercentage / 100)).toFixed(
                2,
              )}
            </span>{" "}
            <span className="text-slate-300 line-through">
              Rs {product.price}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
