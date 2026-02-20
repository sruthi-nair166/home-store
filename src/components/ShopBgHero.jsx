import hero2 from "../assets/Rectangle 1.png";
import { Link } from "react-router-dom";

function ShopBgHero({ title }) {
  return (
    <>
      <div
        className="h-[45vh] mt-[88px] bg-cover bg-center flex flex-col justify-center items-center border-2"
        style={{ backgroundImage: `url(${hero2})` }}
      >
        <h1 className="text-5xl font-medium mb-3">{title}</h1>
        <p className="flex justify-center items-center gap-1.5">
          <Link to="/" className="font-medium">
            Home
          </Link>
          <span className="font-medium">&gt;</span>
          <span className="font-light">{title}</span>
        </p>
      </div>
    </>
  );
}

export default ShopBgHero;
