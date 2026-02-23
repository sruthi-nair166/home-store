import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../utils/data.js";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice.js";

function Product() {
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.value || []);
  const dispatch = useDispatch();

  const currentProduct = products.find((product) => product.id === Number(id));

  const existingItem = cartItems.find((item) => item.id === currentProduct.id);

  const alreadyInCart = existingItem ? existingItem.quantity : 0;

  const maxAllowed = currentProduct.minimumOrderQuantity;

  const remaining = maxAllowed - alreadyInCart;

  if (!currentProduct) {
    return;
  }

  const [size, setSize] = useState("XS");
  const [currentImg, setCurrentImg] = useState(currentProduct.images[0]);
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="flex items-center gap-6 bg-wheat px-24 py-6 mt-[80px]">
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

      <div className="flex gap-20 mx-24 mt-14 mb-20">
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            {currentProduct.images.map((image) => {
              return (
                <button key={image} onClick={() => setCurrentImg(image)}>
                  <img
                    src={image}
                    alt={currentProduct.title}
                    className={`max-w-[80px] rounded-md bg-wheat ${currentImg === image ? "opacity-100" : "opacity-40"}`}
                  />
                </button>
              );
            })}
          </div>
          <img
            src={currentImg}
            alt={currentProduct.title}
            className="h-[395px] max-w-[400px] bg-cover rounded-lg bg-wheat"
          />
        </div>

        <div className="flex-1">
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

          <div className="flex gap-4 mb-8">
            <div
              role="spinbutton"
              aria-label="Quantity"
              aria-valuenow={quantity}
              aria-valuemin={1}
              aria-valuemax={currentProduct.minimumOrderQuantity}
              className="flex items-center justify-between gap-4 border-2 border-slate-400 rounded-md"
            >
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((prev) => Math.max(prev - 1, 1))}
                disabled={quantity === 1}
                className="disabled:text-slate-400 disabled:cursor-not-allowed"
              >
                <HiOutlineMinusSm className="ms-2" />
              </button>
              <span>{quantity}</span>
              <button
                aria-label="Increase quantity"
                onClick={() =>
                  setQuantity((prev) => Math.min(prev + 1, remaining))
                }
                disabled={quantity >= remaining}
                className="disabled:text-slate-400 disabled:cursor-not-allowed"
              >
                <GoPlus className="me-2" />
              </button>
            </div>
            <button
              className="border-2 border-black rounded-lg px-8 py-3 disabled:cursor-not-allowed"
              onClick={() =>
                dispatch(addToCart({ ...currentProduct, quantity }))
              }
              disabled={remaining <= 0}
            >
              Add to Cart
            </button>
            <button className="border-2 border-black rounded-lg px-8 py-3">
              Add to Wishlist
            </button>
            <button className="flex items-center gap-1 border-2 border-black rounded-lg px-6 py-3">
              <span>
                <GoPlus />
              </span>
              <span>Compare</span>
            </button>
          </div>

          <div className="flex gap-10 border-t-2 pt-4">
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

      <div className="mx-24 mb-28">
        <h3 className="text-2xl text-slate-400 mb-6">
          Reviews ({currentProduct.reviews.length})
        </h3>

        <div className="">
          {currentProduct.reviews.map((review) => (
            <div key={review.reviewerEmail}>
              <div className="flex mt-6">
                <div className="mb-4">
                  <h4 className="text-xl font-medium">{review.reviewerName}</h4>
                  <p className="text-slate-400 text-sm">
                    {review.reviewerEmail}
                  </p>
                </div>
                <Rating
                  name="read-only"
                  value={review.rating}
                  readOnly
                  className="me-4"
                />
              </div>
              <p className="pb-8 border-b-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
