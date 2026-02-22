import hero from "../assets/hero_img.jpg";
import furniture from "../assets/categories/furniture.jpg";
import decor from "../assets/categories/decor.jpg";
import kitchen from "../assets/categories/kitchen.jpg";
import { Link } from "react-router-dom";
import products from "../utils/data";

function Home() {
  return (
    <>
      <section
        className="h-[calc(100vh-88px)] bg-contain bg-no-repeat bg-right-top bg-wheat"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="bg-orange-100 h-full w-1/2 flex flex-col justify-center items-start mt-[88px] px-20">
          <h1 className="text-7xl text-dark font-semibold mb-7">
            Home Decor Collection
          </h1>
          <p className="text-lg mb-14">
            Explore premium furniture, home decorations, and kitchen decor that
            turn everyday spaces into something special.
          </p>
          <Link
            to="/shop"
            className="bg-dark text-white font-bold uppercase tracking-widest px-24 py-5"
          >
            Buy Now
          </Link>
        </div>
      </section>

      <section className="mt-14 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="text-slate-500 mb-12">
          Explore our curated selection of furniture, home décor, and kitchen
          essentials.
        </p>

        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={furniture}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Furniture</h3>
          </div>
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={decor}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Home Decor</h3>
          </div>
          <div>
            <img
              className="rounded-lg h-[480px] w-full object-cover"
              src={kitchen}
              alt=""
            />
            <h3 className="text-2xl font-semibold mt-6">Kitchen</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-14">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <div className="grid grid-cols-4 gap-10">
          {products.map((product, i) => {
            if (i < 8) {
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
          })}{" "}
        </div>

        <Link
          to="/shop"
          className="border-2 text-dark font-semibold border-dark px-16 py-3 mt-10 mb-14"
        >
          Show More
        </Link>
      </section>
    </>
  );
}

export default Home;
