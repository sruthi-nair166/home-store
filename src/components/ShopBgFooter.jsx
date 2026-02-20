import { GrTrophy } from "react-icons/gr";
import { BsPatchCheck } from "react-icons/bs";
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiCustomerService2Line } from "react-icons/ri";

function ShopBgFooter() {
  return (
    <>
      <div className="flex justify-between p-24 bg-wheat">
        <div className="flex items-center gap-5">
          <GrTrophy className="text-6xl" />
          <div>
            <p className="text-2xl font-semibold mb-1">High Quality</p>
            <p className="text-slate-400">crafted from top materials</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <BsPatchCheck className="text-6xl" />
          <div>
            <p className="text-2xl font-semibold mb-1">Warranty Protection</p>
            <p className="text-slate-400">Over 2 years</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <LiaShippingFastSolid className="text-6xl" />
          <div>
            <p className="text-2xl font-semibold mb-1">Free Shipping</p>
            <p className="text-slate-400">Order over 150</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <RiCustomerService2Line className="text-6xl" />
          <div>
            <p className="text-2xl font-semibold mb-1">24 / 7 Support</p>
            <p className="text-slate-400">Dedicated Support</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopBgFooter;
