import product1 from "../assets/products/1/1.webp";
import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinusSm } from "react-icons/hi";

function Product() {
  return (
    <>
      <div className="flex items-center gap-6 bg-wheat px-24 py-6 mt-[88px]">
        <div className="flex gap-4 border-e-2 border-slate-300">
          <span className="font-light">Home</span>
          <span className="font-medium">&gt;</span>
          <span className="font-light">Shop</span>
          <span className="font-medium pe-4">&gt;</span>
        </div>
        <p>Annibale Colombo Sofa</p>
      </div>

      <div className="flex gap-20 mx-24 mt-14 mb-20">
        <div className="flex gap-6">
          <div className="flex flex-col gap-6">
            <img src={product1} alt="" className="max-w-[80px] rounded-md" />
            <img src={product1} alt="" className="max-w-[80px] rounded-md" />
            <img src={product1} alt="" className="max-w-[80px] rounded-md" />
          </div>
          <img
            src={product1}
            alt=""
            className="h-[395px] max-w-[400px] bg-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl mb-2">Annibale Colombo Sofa</h2>
          <p className="text-2xl text-slate-400 font-medium mb-4">Rs 2140.00</p>
          <div className="flex items-center mb-6">
            <Rating name="read-only" value={3.9} readOnly className="me-4" />
            <span className="text-sm text-slate-400 border-l-2 ps-4">
              3 Customer Reviews
            </span>
          </div>
          <p className="mb-4">
            The Annibale Colombo Sofa is a sophisticated and comfortable seating
            option, featuring exquisite design and premium upholstery for your
            living room.
          </p>

          <div className="text-slate-400 mb-2">Size</div>
          <div className="flex gap-4 mb-10">
            <button className="bg-dark text-white rounded-lg w-8 h-8 text-sm">
              XS
            </button>
            <button className="bg-wheat rounded-lg w-8 h-8 text-sm">L</button>
            <button className="bg-wheat rounded-lg w-8 h-8 text-sm">XL</button>
          </div>

          <div className="flex gap-4 mb-8">
            <div
              role="spinbutton"
              aria-label="Quantity"
              aria-valuenow={1}
              aria-valuemin={1}
              aria-valuemax={60}
              className="flex items-center justify-between gap-4 border-2 border-slate-400 rounded-md"
            >
              <button aria-label="Decrease quantity">
                <HiOutlineMinusSm className="ms-2" />
              </button>
              <span>1</span>
              <button aria-label="Increase quantity">
                <GoPlus className="me-2" />
              </button>
            </div>
            <button className="border-2 border-black rounded-lg px-10 py-3">
              Add to Cart
            </button>
            <button className="flex items-center gap-1 border-2 border-black rounded-lg px-10 py-3">
              <span>
                <GoPlus />
              </span>
              <span>Compare</span>
            </button>
          </div>

          <div className="flex gap-4 border-t-2 pt-4">
            <p className="text-slate-400">
              <span>Category:</span> <span>Furniture</span>
            </p>
            <p className="text-slate-400">
              <span>Tags:</span> <span>Furniture, Sofas</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-24 mb-28">
        <h3 className="text-2xl text-slate-400 mb-6">Reviews(3)</h3>
        <div className="pb-8 border-b-2">
          <div className="flex">
            <div className="mb-2">
              <h4 className="text-xl font-medium">Christian Perez</h4>
              <p className="text-slate-400 text-sm">
                christian.perez@x.dummyjson.com
              </p>
            </div>
            <Rating name="read-only" value={3} readOnly className="me-4" />
          </div>
          <p>Very unhappy with my purchase!</p>
        </div>

        <div className="mt-6 pb-8 border-b-2">
          <div className="flex">
            <div className="mb-2">
              <h4 className="text-xl font-medium">Lillian Bishop</h4>
              <p className="text-slate-400 text-sm">
                lillian.bishop@x.dummyjson.com
              </p>
            </div>
            <Rating name="read-only" value={5} readOnly className="me-4" />
          </div>
          <p>Fast shipping!</p>
        </div>

        <div className="mt-6 pb-8 border-b-2">
          <div className="flex">
            <div className="mb-2">
              <h4 className="text-xl font-medium">Lillian Simmons</h4>
              <p className="text-slate-400 text-sm">
                lillian.simmons@x.dummyjson.com
              </p>
            </div>
            <Rating name="read-only" value={1} readOnly className="me-4" />
          </div>
          <p>Poor quality!</p>
        </div>
      </div>
    </>
  );
}

export default Product;
