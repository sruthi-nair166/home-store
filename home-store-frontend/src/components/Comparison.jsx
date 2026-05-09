import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { addToCart } from "../features/cart/cartSlice.js";
import { useSelector, useDispatch } from "react-redux";
import {
  setColumn1,
  setColumn2,
  setColumn3,
  setColumn4,
} from "../features/compare/compareSlice";
import products from "../utils/data.js";
import { useState, useEffect } from "react";
import { IoCloseSharp } from "react-icons/io5";
import * as React from "react";
import Snackbar from "@mui/material/Snackbar";

function Comparison() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState(2);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAddProductClick = (col) => {
    setSelectedColumn(col);
    setIsOpen(true);
  };

  const handleSelectProduct = (product) => {
    const alreadyExists = columns.some((col) => col && col.id === product.id);

    if (alreadyExists) {
      handleClick(`${product.title} already in comparison`, "info")();
      return;
    }

    if (selectedColumn === 1) dispatch(setColumn1(product));
    if (selectedColumn === 2) dispatch(setColumn2(product));
    if (selectedColumn === 3) dispatch(setColumn3(product));
    if (selectedColumn === 4) dispatch(setColumn4(product));

    setIsOpen(false);
  };

  const handleDeleteColumn = (colIndex) => {
    if (colIndex === 0) dispatch(setColumn1(null));
    if (colIndex === 1) dispatch(setColumn2(null));
    if (colIndex === 2) dispatch(setColumn3(null));
    if (colIndex === 3) dispatch(setColumn4(null));
  };

  const dispatch = useDispatch();
  const { column1, column2, column3, column4 } = useSelector(
    (state) => state.compare,
  );

  const columns = [column1, column2, column3, column4];

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
    (message, type = "info", product = null) =>
    () => {
      setSnackPack((prev) => [
        ...prev,
        {
          message,
          type,
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

  const handleView = () => {
    if (messageInfo?.product) {
      dispatch(addToWishlist(messageInfo.product));
    }
  };

  return (
    <>
      <ShopBgHero title="Product Comparison" />

      <div className="lg:mx-24 mx-12 my-12">
        <p className="text-2xl font-medium mb-4">
          Go to Product page for more Products
        </p>
        <Link
          className="border-b-2 border-black hover:border-dark hover:text-dark transition pb-1"
          to="/shop"
        >
          View More
        </Link>
      </div>

      <div className="px-4 sm:px-6 lg:px-24 mb-28">
        <div className="overflow-x-auto">
          <table className="min-w-[1100px]">
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                {columns.map((col, i) =>
                  col ? (
                    <th
                      key={col.id}
                      className="text-left pe-14 pb-14"
                      aria-label="Annibale Colombo Sofa"
                    >
                      <div className="relative group overflow-hidden rounded-lg">
                        <img
                          src={col.images[0]}
                          className="rounded-lg w-[280px] h-[180px] object-cover"
                          alt={col.title}
                        />
                        <div
                          className="absolute inset-0 bg-black/60 opacity-0 
                       group-hover:opacity-100 
                       transition-opacity duration-300
                       flex flex-col items-center justify-center gap-3 z-10"
                        >
                          <Link
                            to={`/products/${col.id}`}
                            className="bg-white text-dark hover:bg-dark hover:text-white transition font-normal px-4 py-1"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleDeleteColumn(i)}
                            className="bg-white text-dark hover:bg-dark hover:text-white transition font-normal px-10 py-1"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                      <h2 className="text-2xl font-medium mt-3 mb-1">
                        {col.title}
                      </h2>
                      <div className="text-lg font-medium flex items-center justify-between">
                        <span>
                          Rs{" "}
                          {(
                            col.price *
                            (1 - col.discountPercentage / 100)
                          ).toFixed(2)}
                        </span>
                        <p className="flex items-center gap-1">
                          <span className="text-base text-slate-400 font-medium">
                            {col.rating.toFixed(1)}
                          </span>
                          <FaRegStar className="text-dark text-base" />
                        </p>
                      </div>
                    </th>
                  ) : (
                    <th key={`add-product-${i}`} className="pb-20 px-16">
                      <button
                        onClick={() => handleAddProductClick(i + 1)}
                        className="flex items-center gap-1 bg-dark text-white border-2 border-dark hover:border-dark hover:text-dark hover:bg-white transition font-medium px-4 py-2 rounded-md"
                      >
                        <span>Add a product</span>
                        <GoPlus className="text-2xl" />
                      </button>
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              <tr className="border-t-2">
                <th
                  scope="row"
                  className="text-2xl font-medium text-left pt-14 pb-6"
                >
                  General
                </th>
                {columns.map((_, i) => (
                  <td key={`general-${i}`} className="border-l-2">
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                <th
                  className="text-left font-medium sm:pe-48 pe-32 py-6"
                  scope="row"
                >
                  Brand
                </th>
                {columns.map((col, i) => (
                  <td key={`brand-${i}`} className="border-l-2 ps-6">
                    {col && col.brand}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="text-2xl font-medium text-left py-6">
                  Dimensions
                </th>
                {columns.map((_, i) => (
                  <td key={`dimensions-${i}`} className="border-l-2">
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Weight
                </th>
                {columns.map((col, i) => (
                  <td key={`weight-${i}`} className="border-l-2 ps-6">
                    {col && col.weight}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Width
                </th>
                {columns.map((col, i) => (
                  <td key={`width-${i}`} className="border-l-2 ps-6">
                    {col && col.dimensions.width}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Height
                </th>
                {columns.map((col, i) => (
                  <td key={`height-${i}`} className="border-l-2 ps-6">
                    {col && col.dimensions.height}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Depth
                </th>
                {columns.map((col, i) => (
                  <td key={`depth-${i}`} className="border-l-2 ps-6">
                    {col && col.dimensions.depth}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="text-2xl font-medium text-left py-6">
                  Other
                </th>
                {columns.map((_, i) => (
                  <td key={`other-${i}`} className="border-l-2">
                    &nbsp;
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Warranty
                </th>
                {columns.map((col, i) => (
                  <td key={`warranty-${i}`} className="border-l-2 ps-6">
                    {col && col.warrantyInformation}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Shipping
                </th>
                {columns.map((col, i) => (
                  <td key={`shipping-${i}`} className="border-l-2 ps-6">
                    {col && col.shippingInformation}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Availability
                </th>
                {columns.map((col, i) => (
                  <td key={`availability-${i}`} className="border-l-2 ps-6">
                    {col && col.availabilityStatus}
                  </td>
                ))}
              </tr>
              <tr>
                <th className="text-left font-medium py-6" scope="row">
                  Return Policy
                </th>
                {columns.map((col, i) => (
                  <td key={`return-policy-${i}`} className="border-l-2 ps-6">
                    {col && col.returnPolicy}
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row" className="py-6"></th>
                {columns.map((col, i) => (
                  <td key={`add-to-cart-${i}`} className="border-l-2 ps-6">
                    {col ? (
                      <button
                        onClick={() => {
                          dispatch(addToCart({ ...col, quantity: 1 }));
                          handleClick(
                            `${col.title} added to cart`,
                            "view",
                            col,
                          )();
                        }}
                        className="bg-dark border-2 border-dark text-white hover:text-dark hover:bg-white hover:border-2 hover:border-dark transition px-6 py-3 mt-6"
                      >
                        Add to Cart
                      </button>
                    ) : null}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <ShopBgFooter />

      {isOpen && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white sm:px-12 px-4 pb-10 mx-10 rounded-lg max-h-[80vh] relative overflow-y-auto">
            <button onClick={() => setIsOpen(false)}>
              <IoCloseSharp className="text-2xl absolute top-6 right-8" />
            </button>
            <h2 className="text-center text-4xl font-semibold mt-12 mb-16">
              Choose a Product
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="bg-slate-100 w-full cursor-pointer transform transition duration-200 hover:scale-105 hover:shadow-lg flex flex-col text-left"
                >
                  <img
                    src={product.images[0]}
                    className="h-[300px] w-full object-cover object-center"
                    alt={product.title}
                  />
                  <div className="flex flex-col mt-4 pb-6 mx-4 relative z-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-semibold mb-1">
                        {product.title}
                      </h3>
                      <p className="flex items-center gap-1">
                        <span className="text-lg">
                          {product.rating.toFixed(1)}
                        </span>
                        <FaRegStar className="text-dark" />
                      </p>
                    </div>
                    <p className="text-slate-400 mb-4">{product.brand}</p>
                    <p className="flex justify-between items-end">
                      <span className="text-xl font-semibold">
                        Rs{" "}
                        {(
                          product.price *
                          (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                      </span>
                      <span className="text-slate-300 line-through">
                        Rs {product.price}
                      </span>
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

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
          messageInfo?.type === "view" ? (
            <Link
              to="/cart"
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

export default Comparison;
