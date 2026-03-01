import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../utils/data.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice.js";
import { setColumn1 } from "../features/compare/compareSlice";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

function Product() {
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.value || []);
  const wishlistItems = useSelector((state) => state.wishlist.value || []);
  const dispatch = useDispatch();

  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const width = e.target.offsetWidth;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

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
    (message, undo = false, product = null, redirectTo = null) =>
    () => {
      setSnackPack((prev) => [
        ...prev,
        {
          message,
          undo,
          product,
          redirectTo,
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
  };

  const currentProduct = products.find((product) => product.id === Number(id));

  if (!currentProduct) {
    return;
  }

  const isInWishlist = wishlistItems.find(
    (item) => item.id === currentProduct.id,
  );

  const handleToggle = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(currentProduct.id));
    } else {
      dispatch(addToWishlist({ ...currentProduct, quantity: 1 }));
    }
  };

  const handleCompareClick = () => {
    dispatch(setColumn1(currentProduct));
  };

  const [size, setSize] = useState("XS");
  const [currentImg, setCurrentImg] = useState(currentProduct.images[0]);

  const existingItem = cartItems.find((item) => item.id === currentProduct.id);

  const maxAllowed = currentProduct.minimumOrderQuantity;

  const [quantity, setQuantity] = useState(
    existingItem ? existingItem.quantity : 1,
  );

  return (
    <>
      <div className="flex items-center gap-6 bg-wheat sm:px-24 px-10 py-6 mt-[80px]">
        <div className="flex gap-4 border-e-2 border-slate-400">
          <Link to="/" className="font-light">
            Home
          </Link>
          <span className="font-medium">&gt;</span>
          <Link to="/shop" className="font-light">
            Shop
          </Link>
          <span className="font-medium pe-4">&gt;</span>
        </div>
        <p>{currentProduct.title}</p>
      </div>

      <div className="flex lg:flex-row flex-col 2xl:gap-20 gap-10 2xl:mx-24 lg:mx-10 sm:mx-20 sm:mt-14 mb-20">
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:hidden w-full relative">
            <div
              onScroll={handleScroll}
              className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
            >
              {currentProduct.images.map((image, index) => (
                <div key={index} className="min-w-full snap-center">
                  <img
                    src={image}
                    alt={currentProduct.title}
                    className="w-full h-[400px] object-cover bg-[#fdf8f0]"
                  />
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {currentProduct.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 w-2 rounded-full transition-all ${
                    activeIndex === i ? "bg-white w-4" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="hidden sm:block">
            <img
              src={currentImg}
              alt={currentProduct.title}
              className="h-[395px] max-w-[400px] w-full sm:object-cover object-contain rounded-lg bg-wheat"
            />
          </div>
        </div>

        <div className="flex-1 sm:mx-0 mx-10">
          <h2 className="text-4xl mb-2 font-medium">{currentProduct.title}</h2>
          <p className="text-2xl text-slate-400 font-medium mb-4">
            Rs{" "}
            {(
              currentProduct.price *
              (1 - currentProduct.discountPercentage / 100)
            ).toFixed(2)}
          </p>
          <div className="flex items-center mb-6">
            <Rating
              name="read-only"
              value={currentProduct.rating}
              readOnly
              className="me-4"
            />
            <span className="text-sm text-slate-400 border-l-2 ps-4">
              {currentProduct.reviews.length} Customer Reviews
            </span>
          </div>
          <p className="mb-4">{currentProduct.description}</p>

          <div className="text-slate-400 mb-2">Size</div>
          <div className="flex gap-4 mb-10">
            <button
              className={`${size === "XS" ? "bg-dark text-white" : "bg-wheat"} rounded-lg w-8 h-8 text-sm`}
              onClick={() => setSize("XS")}
            >
              XS
            </button>
            <button
              className={`${size === "L" ? "bg-dark text-white" : "bg-wheat"} rounded-lg w-8 h-8 text-sm`}
              onClick={() => setSize("L")}
            >
              L
            </button>
            <button
              className={`${size === "XL" ? "bg-dark text-white" : "bg-wheat"} rounded-lg w-8 h-8 text-sm`}
              onClick={() => setSize("XL")}
            >
              XL
            </button>
          </div>

          <div className="flex flex-wrap gap-4">
            <div
              role="spinbutton"
              aria-label="Quantity"
              className="flex items-center justify-between gap-4 border-2 border-black rounded-md"
            >
              <button
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity((prev) => prev - 1);
                  }
                }}
                className={`${
                  quantity === 1
                    ? "text-slate-400 cursor-not-allowed"
                    : "text-black"
                } ps-3`}
              >
                <HiOutlineMinusSm />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => {
                  if (quantity < maxAllowed) {
                    setQuantity((prev) => prev + 1);
                  } else {
                    handleClick(
                      "You’ve reached the maximum quantity for this item.",
                    )();
                  }
                }}
                className={`${
                  quantity >= maxAllowed
                    ? "text-slate-400 cursor-not-allowed"
                    : "text-black"
                } pe-3`}
              >
                <GoPlus />
              </button>
            </div>

            <button
              className={
                "border-2 border-black hover:text-white hover:bg-slate-800 transition rounded-lg px-8 py-3"
              }
              onClick={() => {
                if (
                  existingItem &&
                  existingItem.quantity === maxAllowed &&
                  quantity === maxAllowed
                ) {
                  handleClick(
                    "You’ve reached the maximum quantity for this item.",
                  )();
                  return;
                }

                dispatch(addToCart({ ...currentProduct, quantity }));

                handleClick(
                  existingItem ? "Cart updated" : "Added to cart",
                  false,
                  null,
                  "/cart",
                )();
              }}
            >
              {existingItem ? "Update Cart" : "Add to Cart"}
            </button>

            <button
              onClick={() => {
                handleToggle();
                handleClick(
                  `${currentProduct.title} ${
                    isInWishlist ? "removed from Wishlist" : "added to Wishlist"
                  }`,
                  isInWishlist,
                  currentProduct,
                  !isInWishlist ? "/wishlist" : null,
                )();
              }}
              className="border-2 border-black hover:text-white hover:bg-slate-800 transition rounded-lg px-8 py-3"
            >
              {isInWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
            <Link
              to="/comparison"
              onClick={handleCompareClick}
              className="flex items-center gap-1 border-2 border-black hover:text-white hover:bg-slate-800 transition rounded-lg px-6 py-3"
            >
              <span>
                <GoPlus />
              </span>
              <span>Compare</span>
            </Link>
          </div>

          {existingItem && (
            <p className="text-sm text-slate-500 mt-3">
              {existingItem.quantity} currently in cart
            </p>
          )}

          <div className="flex flex-wrap gap-x-10 gap-y-3 border-t-2 pt-4 mt-8">
            <p className="text-slate-400 flex gap-4">
              <span>SKU:</span> <span>{currentProduct.sku}</span>
            </p>
            <p className="text-slate-400 flex gap-4">
              <span>Category:</span> <span>{currentProduct.category}</span>
            </p>
            <p className="text-slate-400 flex gap-4">
              <span>Tags:</span>
              <span>{currentProduct.tags.join(", ")}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="sm:mx-24 mx-10 mb-28">
        <h3 className="text-2xl text-slate-400 mb-6">
          Reviews ({currentProduct.reviews.length})
        </h3>

        <div>
          {currentProduct.reviews.map((review) => (
            <div key={review.reviewerEmail}>
              <div className="flex sm:flex-row flex-col mt-6">
                <div className="mb-4">
                  <h4 className="text-xl font-medium">{review.reviewerName}</h4>
                  <p className="text-slate-400 text-sm">
                    {review.reviewerEmail}
                  </p>
                </div>
                <div className="w-max">
                  <Rating name="read-only" value={review.rating} readOnly />
                </div>
              </div>
              <p className="pb-8 border-b-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>

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
          messageInfo?.redirectTo ? (
            <Link
              to={messageInfo.redirectTo}
              className="text-dark font-semibold tracking-widest mr-1"
              onClick={handleClose}
            >
              VIEW
            </Link>
          ) : null
        }
      />
    </>
  );
}

export default Product;
