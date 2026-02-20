import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import product1 from "../assets/Mask group.png";
import { AiFillDelete } from "react-icons/ai";

function Cart() {
  return (
    <>
      <ShopBgHero title="Cart" />

      <div className="grid grid-cols-3 gap-10 mx-24 mt-16 mb-24">
        <table className="w-full col-span-2">
          <thead>
            <tr className="bg-wheat ">
              <th className="font-medium py-4 px-6 text-left">Product</th>
              <th className="font-medium py-4 px-6 text-left">Price</th>
              <th className="font-medium py-4 px-6 text-center">Quantity</th>
              <th className="font-medium py-4 px-6 text-left">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="gap-4 py-6">
                <div className="flex items-center gap-2">
                  <img src={product1} className="bg-wheat rounded-lg" alt="" />
                  <p>Product Name</p>
                </div>
              </td>
              <td className="px-6">Rs. 25,000.00</td>
              <td className="p-6 text-center">
                <span className="border-2 rounded-md px-4 py-2">1</span>
              </td>
              <td className="p-6">Rs. 25,000.00</td>
              <td className="p-6">
                <button>
                  <AiFillDelete className="text-dark text-xl" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="bg-wheat flex flex-col justify-between items-center gap-10 px-24 py-8">
          <h2 className="text-3xl font-semibold">Cart Total</h2>
          <p className="flex justify-between w-full">
            <span className="font-medium">Subtotal</span>
            <span className="text-slate-400">Rs. 250,000.00</span>
          </p>
          <p className="flex justify-between w-full">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-dark">
              Rs. 250,000.00
            </span>
          </p>
          <button className="border-2 border-black rounded-lg px-10 py-3">
            Checkout
          </button>
        </div>
      </div>

      <ShopBgFooter title="Cart" />
    </>
  );
}

export default Cart;
