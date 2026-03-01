import hero from "../assets/hero_img.jpg";
import furniture from "../assets/categories/furniture.jpg";
import decor from "../assets/categories/decor.jpg";
import kitchen from "../assets/categories/kitchen.jpg";
import { Link } from "react-router-dom";
import products from "../utils/data";
import ProductCard from "./ProductCard";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

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
        className="h-screen bg-cover bg-no-repeat bg-top bg-wheat flex flex-col justify-center lg:items-start items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-orange-100 lg:h-full lg:w-1/2 w-3/4 h-3/4 flex flex-col justify-center lg:items-start items-center mt-[80px] sm:px-20 px-10">
          <h1 className="sm:text-7xl text-5xl text-dark font-semibold mb-7 lg:text-left text-center">
            Home Decor Collection
          </h1>
          <p className="text-lg sm:mb-14 mb-10 lg:text-left text-center">
            Explore premium furniture, home decorations, and kitchen decor that
            turn everyday spaces into something special.
          </p>
          <Link
            to="/shop"
            className="bg-dark border-2 border-dark hover:border-2 hover:border-dark hover:text-dark hover:bg-white text-white transition font-bold uppercase tracking-widest sm:px-24 sm:py-5 px-20 py-2 text-center"
          >
            Buy Now
          </Link>
        </div>
      </section>

      <section className="mt-14 mx-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-4">
          Browse The Range
        </h2>
        <p className="text-slate-500 mb-12 text-center">
          Explore our curated selection of furniture, home décor, and kitchen
          essentials.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 text-center">
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

      <section className="flex flex-col items-center mt-14 lg:mx-24 mx-10">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-10">
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
          className="border-2 text-dark font-semibold border-dark hover:border-white hover:bg-dark hover:text-white transition px-16 py-3 mt-10 mb-14"
        >
          Show More
        </Link>
      </section>

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
          messageInfo?.undo ? null : (
            <Link
              to="/wishlist"
              className="text-dark font-semibold tracking-widest mr-1"
              size="small"
              onClick={handleUndo}
            >
              VIEW
            </Link>
          )
        }
      />
    </>
  );
}

export default Home;
