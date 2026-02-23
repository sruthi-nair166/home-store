import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { AiFillDelete } from "react-icons/ai";
import Tooltip from "@mui/material/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/cart/cartSlice";

function Cart() {
  const cartData = useSelector((state) => state.cart.value || []);
  const dispatch = useDispatch();

  const cartTotal = cartData.reduce((acc, item) => {
    const discountedPrice = item.price * (1 - item.discountPercentage / 100);

    return acc + discountedPrice * item.quantity;
  }, 0);

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
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {cartData.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-xl text-slate-400 py-6"
                >
                  No items added yet
                </td>
              </tr>
            ) : (
              cartData.map((item) => {
                const discountedPrice =
                  item.price * (1 - item.discountPercentage / 100);

                const subtotal = discountedPrice * item.quantity;

                return (
                  <tr key={item.id} className="relative hover:bg-slate-100">
                    <td className="py-6">
                      <div className="flex items-center gap-2">
                        <img
                          src={item.images[0]}
                          className="bg-wheat rounded-lg w-[100px] h-[100px] object-cover"
                          alt={item.title}
                        />
                        <p>{item.title}</p>
                      </div>
                    </td>

                    <td className="p-6 text-slate-400">
                      Rs. {discountedPrice.toFixed(2)}
                    </td>

                    <td className="p-6 text-center">
                      <span className="border-2 border-slate-400 rounded-md px-4 py-2">
                        {item.quantity}
                      </span>
                    </td>

                    <td className="p-6">Rs. {subtotal.toFixed(2)}</td>

                    <td className="p-6">
                      <Tooltip title="Delete" arrow>
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="relative z-10 p-4"
                          aria-label="Delete"
                        >
                          <AiFillDelete className="text-dark text-xl" />
                        </button>
                      </Tooltip>
                    </td>

                    <Link
                      to={`/products/${item.id}`}
                      className="absolute inset-0"
                      aria-label={`View ${item.title}`}
                    />
                  </tr>
                );
              })
            )}
          </tbody>
        </table>

        <div className="bg-wheat flex flex-col justify-between items-center gap-10 px-24 py-8">
          <h2 className="text-3xl font-semibold">Cart Total</h2>
          <p className="flex justify-between w-full">
            <span className="font-medium">Subtotal</span>
            <span className="text-slate-400">
              Rs. {cartData.length === 0 ? 0 : cartTotal.toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between w-full">
            <span className="font-medium">Total</span>
            <span className="text-xl font-medium text-dark">
              Rs. {cartData.length === 0 ? 0 : cartTotal.toFixed(2)}
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
