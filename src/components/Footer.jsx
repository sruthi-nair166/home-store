import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="border-t-2 pt-12 px-24">
      <div className="flex justify-between gap-40">
        <div>
          <h2 className="text-2xl font-bold font-logo mb-12">Furniro</h2>
          <p className="text-slate-400">
            24, Nagdevi Street, Mandvi, Mumbai, Maharashtra, 400003
          </p>
        </div>

        <nav aria-label="footer-links" className="flex">
          <div className="me-40">
            <h3 className="font-medium text-slate-400 mb-12">Links</h3>
            <ul className="flex flex-col gap-12">
              <li>
                <Link to="/" className="font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="font-medium">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/" className="font-medium">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="font-medium">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="me-28">
            <h3 className="font-medium text-slate-400 mb-12">Help</h3>
            <ul className="flex flex-col gap-12">
              <li>
                <a href="" className="font-medium">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  Returns
                </a>
              </li>
              <li>
                <a href="" className="font-medium">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-slate-400 mb-12">Newsletter</h3>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="text-sm border-b-2 border-black py-0.5"
              />
              <button className="text-sm border-b-2 border-black font-medium">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </nav>
      </div>

      <p className="border-t-2 pt-12 mt-16 mb-12">
        2026 Furniro. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
