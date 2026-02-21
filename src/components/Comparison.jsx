import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import { Link } from "react-router-dom";
import product1 from "../assets/products/1/1.webp";
import Rating from "@mui/material/Rating";
import { GoPlus } from "react-icons/go";

function Comparison() {
  return (
    <>
      <ShopBgHero title="Product Comparison" />

      <div className="mx-24 my-12">
        <p className="text-2xl font-medium mb-4">
          Go to Product page for more Products
        </p>
        <Link className="border-b-2 border-black pb-1" to="/shop">
          View More
        </Link>
      </div>

      <div className="flex gap-20 mx-24 mb-28 items-start">
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="text-left pe-14 pb-20">
                <img
                  src={product1}
                  style={{
                    width: "280px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                  alt=""
                />
                <h2 className="text-2xl font-medium">Annibale Colombo Sofa</h2>
                <p className="text-lg font-medium">Rs 2140.00</p>
                <p className="flex items-center gap-1">
                  <span className="text-lg font-medium">3.9</span>
                  <Rating
                    name="read-only"
                    value={3.9}
                    readOnly
                    className="me-1"
                  />
                  <span className="text-sm font-normal text-slate-400 border-l-2 ps-2">
                    3 Customer Reviews
                  </span>
                </p>
              </th>
              <th className="text-left pb-20">
                <img
                  src={product1}
                  style={{
                    width: "280px",
                    height: "180px",
                    objectFit: "cover",
                  }}
                  className="rounded-lg"
                  alt=""
                />
                <h2 className="text-2xl font-medium">Annibale Colombo Sofa</h2>
                <p className="text-lg font-medium">Rs 2140.00</p>
                <p className="flex items-center gap-1">
                  <span className="text-lg font-medium">3.9</span>
                  <Rating
                    name="read-only"
                    value={3.9}
                    readOnly
                    className="me-1"
                  />
                  <span className="text-sm font-normal text-slate-400 border-l-2 ps-2">
                    3 Customer Reviews
                  </span>
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th
                colSpan="3"
                scope="colgroup"
                className="text-2xl font-medium text-left pt-14 pb-6 border-t-2"
              >
                General
              </th>
            </tr>
            <tr>
              <th className="text-left font-medium pe-48 py-6" scope="row">
                Brand
              </th>
              <td>Annibale Colombo</td>
              <td>Annibale Colombo</td>
            </tr>
            <tr>
              <th
                colSpan="3"
                scope="colgroup"
                className="text-2xl font-medium text-left py-6"
              >
                Dimensions
              </th>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Weight
              </th>
              <td>6</td>
              <td>6</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Width
              </th>
              <td>12.75</td>
              <td>12.75</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Height
              </th>
              <td>20.55</td>
              <td>20.55</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Depth
              </th>
              <td>19.06</td>
              <td>19.06</td>
            </tr>
            <tr>
              <th
                colSpan="3"
                scope="colgroup"
                className="text-2xl font-medium text-left py-6"
              >
                Other
              </th>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Warranty
              </th>
              <td>Lifetime</td>
              <td>Lifetime</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Shipping
              </th>
              <td>1 week</td>
              <td>1 week</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Availability
              </th>
              <td>In Stock</td>
              <td>In Stock</td>
            </tr>
            <tr>
              <th className="text-left font-medium py-6" scope="row">
                Return Policy
              </th>
              <td>7 days return policy</td>
              <td>7 days return policy</td>
            </tr>
            <tr>
              <td className="py-6"></td>
              <td>
                <button className="bg-dark text-white px-6 py-3 mt-6">
                  Add to Cart
                </button>
              </td>
              <td>
                <button className="bg-dark text-white px-6 py-3 mt-6">
                  Add to Cart
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="flex items-center gap-2 bg-dark text-white px-4 py-2 rounded-md">
          <span>Add a product</span>
          <GoPlus />
        </button>
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Comparison;
