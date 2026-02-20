import { Outlet } from "react-router-dom";
import hero2 from "../assets/Rectangle 1.png";

function ShopBg() {
  return (
    <>
      <div
        className="h-[45vh] mt-[88px] bg-cover bg-center relative border-2"
        style={{ backgroundImage: `url(${hero2})` }}
      ></div>
      <Outlet />
    </>
  );
}

export default ShopBg;
