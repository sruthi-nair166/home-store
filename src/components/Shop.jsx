import { Link } from "react-router-dom";
import filter from "../assets/system-uicons_filtering.png";
import product1 from "../assets/Images.png";
import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";

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
          <p>Showing 1–16 of 32 results</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xl">Sort By</p>
          <button className="text-xl text-slate-400 bg-white px-12 py-3">
            Default
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mx-24 my-16">
        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>

        <div className="bg-slate-100 max-w-[285px]">
          <img src={product1} alt="" />
          <div className="flex flex-col gap-2 mt-4 pb-6 mx-4">
            <h3 className="text-2xl font-semibold">Product Name</h3>
            <p className="text-slate-400">Stylish Cafe Chair</p>
            <p className="flex justify-between">
              <span className="text-xl font-semibold">Rp 2500.000</span>{" "}
              <span className="text-slate-300 line-through">Rp 3500.000</span>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mb-20">
        <button className="text-xl bg-dark rounded-lg px-6 py-3">1</button>
        <button className="text-xl bg-wheat rounded-lg px-6 py-3">2</button>
        <button className="text-xl bg-wheat rounded-lg px-6 py-3">3</button>
        <button className="text-xl bg-wheat rounded-lg px-6 py-3">Next</button>
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Shop;
