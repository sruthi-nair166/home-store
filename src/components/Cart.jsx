import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { AiFillDelete } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";

function Cart() {
  const cartData = useSelector((state) => state.cart.value || []);
  const dispatch = useDispatch();

  const cartTotal = cartData.reduce((acc, item) => {
    const discountedPrice = item.price * (1 - item.discountPercentage / 100);

    return acc + discountedPrice * item.quantity;
  }, 0);

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
      dispatch(addToCart(messageInfo.product));
    }

    setOpen(false);
    setMessageInfo(undefined);
  };

  return (
    <>
      <ShopBgHero title="Cart" />

      <div className="grid xl:grid-cols-3 grid-cols-1 gap-10 sm:mx-24 mx-12 mt-16 mb-24">
        <div className="overflow-x-auto lg:col-span-2">
          <table className="min-w-[800px] w-full">
            <thead>
              <tr className="bg-wheat ">
                <th className="font-medium py-4 px-6 text-left">Product</th>
                <th className="font-medium py-4 px-6 text-left">Price</th>
                <th className="font-medium py-4 px-6 text-center">Quantity</th>
                <th className="font-medium py-4 px-6 text-left">Subtotal</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cartData.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center text-xl text-slate-400 py-6"
                  >
                    No items added yet
                  </td>
                </tr>
              ) : (
                cartData.map((item) => {
                  const discountedPrice =
                    item.price * (1 - item.discountPercentage / 100);

                  const subtotal = discountedPrice * item.quantity;

                  return (
                    <tr key={item.id} className="relative hover:bg-slate-100">
                      <td className="py-6">
                        <div className="flex items-center gap-2">
                          <img
                            src={item.images[0]}
                            className="bg-wheat rounded-lg w-[100px] h-[100px] object-cover"
                            alt={item.title}
                          />
                          <p>{item.title}</p>
                        </div>
                      </td>

                      <td className="p-6 text-slate-400">
                        Rs. {discountedPrice.toFixed(2)}
                      </td>

                      <td className="p-6 text-center">
                        <span className="border-2 border-slate-400 rounded-md px-4 py-2">
                          {item.quantity}
                        </span>
                      </td>

                      <td className="p-6">Rs. {subtotal.toFixed(2)}</td>

                      <td className="p-6">
                        <Tooltip title="Delete" arrow>
                          <button
                            onClick={() => {
                              dispatch(removeFromCart(item.id));
                              handleClick(
                                `${item.title} removed from cart`,
                                true,
                                item,
                              )();
                            }}
                            className="relative z-10 p-4"
                            aria-label="Delete"
                          >
                            <AiFillDelete className="text-dark text-xl" />
                          </button>
                        </Tooltip>
                      </td>

                      <Link
                        to={`/products/${item.id}`}
                        className="absolute inset-0"
                        aria-label={`View ${item.title}`}
                      />
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <div className="bg-wheat flex flex-col items-center max-h-[340px] gap-10 sm:px-20 px-10 pt-8 pb-10">
          <h2 className="text-3xl font-semibold">Cart Total</h2>
          <p className="flex justify-between w-full">
            <span className="font-medium">Subtotal</span>
            <span className="text-slate-400">
              Rs. {cartData.length === 0 ? 0 : cartTotal.toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between w-full">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-dark">
              Rs. {cartData.length === 0 ? 0 : cartTotal.toFixed(2)}
            </span>
          </p>
          <button className="border-2 border-black hover:bg-slate-800 hover:text-white transition rounded-lg px-16 py-3">
            Checkout
          </button>
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
              className="text-dark font-semibold tracking-widest mr-1"
              onClick={handleUndo}
            >
              UNDO
            </button>
          ) : null
        }
      />
    </>
  );
}

export default Cart;
