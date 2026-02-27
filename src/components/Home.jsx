import hero from "../assets/hero_img.jpg";
import furniture from "../assets/categories/furniture.jpg";
import decor from "../assets/categories/decor.jpg";
import kitchen from "../assets/categories/kitchen.jpg";
import { Link } from "react-router-dom";
import products from "../utils/data";
import ProductCard from "./ProductCard";
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import { addToWishlist } from "../features/wishlist/wishlistSlice";

function Home() {
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

  const dispatch = useDispatch();

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
  };

  return (
    <>
      <section
        className="h-[calc(100vh-80px)] bg-contain bg-no-repeat bg-right-top bg-wheat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-orange-100 h-full w-1/2 flex flex-col justify-center items-start mt-[80px] px-20">
          <h1 className="text-7xl text-dark font-semibold mb-7">
            Home Decor Collection
          </h1>
          <p className="text-lg mb-14">
            Explore premium furniture, home decorations, and kitchen decor that
            turn everyday spaces into something special.
          </p>
          <Link
            to="/shop"
            className="bg-dark text-white font-bold uppercase tracking-widest px-24 py-5"
          >
            Buy Now
          </Link>
        </div>
      </section>

      <section className="mt-14 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="text-slate-500 mb-12">
          Explore our curated selection of furniture, home décor, and kitchen
          essentials.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={furniture}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Furniture</h3>
          </div>
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={decor}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Home Decor</h3>
          </div>
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={kitchen}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Kitchen</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-14">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <div className="grid grid-cols-4 gap-10">
          {products.map((product, i) => {
            if (i < 8) {
              return (
                <ProductCard
                  key={`${product.id}-${product.title}`}
                  product={product}
                  handleClick={handleClick}
                />
              );
            }
          })}{" "}
        </div>

        <Link
          to="/shop"
          className="border-2 text-dark font-semibold border-dark px-16 py-3 mt-10 mb-14"
        >
          Show More
        </Link>
      </section>

      <Snackbar
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        slotProps={{ transition: { onExited: handleExited } }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          messageInfo?.undo ? (
            <Button color="secondary" size="small" onClick={handleUndo}>
              UNDO
            </Button>
          ) : null
        }
      />
    </>
  );
}

export default Home;
