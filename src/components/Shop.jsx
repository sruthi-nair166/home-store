import { useState } from "react";
import filter from "../assets/system-uicons_filtering.png";
import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import products from "../utils/data.js";
import ProductCard from "./ProductCard.jsx";

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
          <div className="flex gap-2 border-e-2 border-slate-400">
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
          return <ProductCard product={product} />;
        })}
      </div>

      <div className="flex justify-center gap-6 mb-20">
        {Array.from({
          length: Math.ceil(products.length / productsPerPage),
        }).map((_, i) => (
          <button
            key={i}
            className={`${i + 1 === currentPage ? "bg-dark text-white" : "bg-wheat"} text-xl rounded-lg w-14 h-14`}
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
