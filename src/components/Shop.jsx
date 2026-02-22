import { Link } from "react-router-dom";
import filter from "../assets/system-uicons_filtering.png";
import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import products from "../utils/data.js";

function Shop() {
  return (
    <>
      <ShopBgHero title="Shop" />
      <div className="flex justify-between items-center bg-wheat px-24 py-6">
        <div className="flex items-center gap-6">
          <div className="flex gap-2 border-e-2 border-slate-300">
            <img src={filter} className="h-[25px]" alt="" />
            <span className="text-xl me-6">Filter</span>
          </div>
          <p>Showing 1–16 of {products.length} results</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xl">Sort By</p>
          <button className="text-xl text-slate-400 bg-white px-12 py-3">
            Default
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mx-24 my-16">
        {products.map((product, i) => {
          if (i < 16) {
            return (
              <div
                key={`${product.id}-${product.title}`}
                className="bg-slate-100 max-w-[285px]"
              >
                <img
                  src={product.images[0]}
                  className="h-[300px] w-full object-cover object-top"
                  alt={product.title}
                />
                <div className="flex flex-col mt-4 pb-6 mx-4">
                  <h3 className="text-2xl font-semibold mb-1">
                    {product.title}
                  </h3>
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
          }
        })}
      </div>

      <div className="flex justify-center gap-4 mb-20">
        <button className="text-xl bg-dark rounded-lg px-6 py-3">1</button>
        <button className="text-xl bg-wheat rounded-lg px-6 py-3">2</button>
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Shop;
