import hero from "../assets/scandinavian-interior-mockup-wall-decal-background 1.png";
import dining from "../assets/image 106.png";
import living from "../assets/image 100.png";
import bedroom from "../assets/image 101.png";
import product1 from "../assets/Images.png";

function Home() {
  return (
    <>
      <section
        className="h-screen"
        style={{ backgroundImage: `url(${hero})` }}
      ></section>

      <section className="mt-14 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Browse The Range</h2>
        <p className="text-slate-500 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="flex flex-wrap text-center gap-6">
          <div>
            <img className="rounded-lg" src={dining} alt="" />
            <h3 className="text-2xl font-semibold mt-6">Dining</h3>
          </div>
          <div>
            <img className="rounded-lg" src={living} alt="" />
            <h3 className="text-2xl font-semibold mt-6">Living</h3>
          </div>
          <div>
            <img className="rounded-lg" src={bedroom} alt="" />
            <h3 className="text-2xl font-semibold mt-6">Bedroom</h3>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center mt-14">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>

        <div className="grid grid-cols-4 gap-10">
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

        <button className="border-2 text-yellow-600 font-semibold border-yellow-600 px-16 py-3 mt-10 mb-14">
          Show More
        </button>
      </section>
    </>
  );
}

export default Home;
