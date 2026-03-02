import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { addToCart } from "../features/cart/cartSlice.js";
import { Link } from "react-router-dom";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

function Wishlist() {
  const wishlistData = useSelector((state) => state.wishlist.value || []);
  const dispatch = useDispatch();

  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick =
    (message, undo = false, product = null) =>
    () => {
      setSnackPack((prev) => [
        ...prev,
        {
          message,
          undo,
          product,
          key: new Date().getTime(),
        },
      ]);
    };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleUndo = () => {
    if (messageInfo?.product) {
      dispatch(addToWishlist(messageInfo.product));
    }
    setOpen(false);
    setMessageInfo(undefined);
  };

  return (
    <>
      <ShopBgHero title="Wishlist" />

      <div className="mx-10 mt-16 mb-24">
        <div className="w-full overflow-x-auto">
          <table className="min-w-[1200px] mx-auto">
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
                      {(
                        item.price *
                        (1 - item.discountPercentage / 100)
                      ).toFixed(2)}
                    </td>
                    <td className="p-6 text-center">
                      <Tooltip title="Remove from Wishlist" arrow>
                        <button
                          onClick={() => {
                            dispatch(removeFromWishlist(item.id));

                            handleClick(
                              `${item.title} removed from wishlist`,
                              true,
                              item,
                            )();
                          }}
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
                        onClick={() => {
                          dispatch(addToCart({ ...item, quantity: 1 }));
                          handleClick(
                            `${item.title} added to cart`,
                            false,
                            null,
                          )();
                        }}
                        className="bg-dark text-white border-2 border-dark hover:bg-white hover:text-dark hover:border-dark transition relative z-10 px-4 py-2"
                      >
                        Add to Cart
                      </button>

                      <Link
                        to={`/products/${item.id}`}
                        className="absolute inset-0"
                        aria-label={`View ${item.title}`}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ShopBgFooter title="Cart" />

      <Snackbar
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        slotProps={{ transition: { onExited: handleExited } }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          messageInfo?.undo ? (
            <button
              onClick={handleUndo}
              className="text-dark font-semibold tracking-widest mr-1"
            >
              UNDO
            </button>
          ) : (
            <Link
              to="/cart"
              className="text-dark font-semibold tracking-widest mr-1"
              onClick={() => setOpen(false)}
            >
              VIEW
            </Link>
          )
        }
      />
    </>
  );
}

export default Wishlist;
