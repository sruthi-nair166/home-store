import { Link } from "react-router-dom";
import { useState } from "react";
import filter from "../assets/system-uicons_filtering.png";
import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import products from "../utils/data.js";
import { FaRegStar } from "react-icons/fa6";
import { VscArrowSwap } from "react-icons/vsc";

function Shop() {
  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const currentProducts = products.slice(startIndex, endIndex);

  const startDisplay = startIndex + 1;
  const endDisplay = Math.min(endIndex, products.length);

  return (
    <>
      <ShopBgHero title="Shop" />
      <div className="flex justify-between items-center bg-wheat px-24 py-6">
        <div className="flex items-center gap-6">
          <div className="flex gap-2 border-e-2 border-slate-300">
            <img src={filter} className="h-[25px]" alt="" />
            <span className="text-xl me-6">Filter</span>
          </div>
          <p>
            Showing {startDisplay}–{endDisplay} of {products.length} results
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xl">Sort By</p>
          <button className="text-xl text-slate-400 bg-white px-12 py-3">
            Default
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mx-24 my-16">
        {currentProducts.map((product) => {
          return (
            <div
              key={`${product.id}-${product.title}`}
              className="bg-slate-100 max-w-[285px] relative group overflow-hidden"
            >
              <img
                src={product.images[0]}
                className="h-[300px] w-full object-cover object-top"
                alt={product.title}
              />

              <div
                className="absolute inset-0 bg-black/60 opacity-0 
                       group-hover:opacity-100 
                       transition-opacity duration-300
                       flex items-center justify-center z-10"
              >
                <div className="flex flex-col gap-3">
                  <button className="bg-white text-dark px-14 py-3 font-semibold">
                    Add to Cart
                  </button>

                  <button className="text-white font-medium px-6 py-2 flex items-center justify-center gap-2">
                    <span>
                      <VscArrowSwap strokeWidth={0.5} />
                    </span>
                    <span className="tracking-wider">Compare</span>
                  </button>
                </div>
              </div>

              <div className="flex flex-col mt-4 pb-6 mx-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-semibold mb-1">
                    {product.title}
                  </h3>
                  <p className="flex items-center gap-1">
                    <span className="text-lg">{product.rating.toFixed(1)}</span>
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
                  </span>{" "}
                  <span className="text-slate-300 line-through">
                    Rs {product.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center gap-6 mb-20">
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, i) => (
          <button
            key={i}
            className={`${i + 1 === currentPage ? "bg-dark" : "bg-wheat"} text-xl rounded-lg w-14 h-14`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Shop;
