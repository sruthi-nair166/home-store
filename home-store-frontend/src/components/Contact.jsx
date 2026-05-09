import ShopBgHero from "./ShopBgHero";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import ShopBgFooter from "./ShopBgFooter";

function Contact() {
  return (
    <>
      <ShopBgHero title="Contact" />

      <div className="text-center mt-24 mx-10 mb-16">
        <h2 className="text-4xl font-semibold mb-2">Get In Touch With Us</h2>
        <p className="text-slate-400 sm:mx-24">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-10 sm:mx-40 mx-10 mb-24">
        <div className="flex flex-col flex-none gap-10 mx-auto">
          <div className="flex justify-between gap-6">
            <FaLocationDot className="text-2xl mt-1" />
            <div>
              <h3 className="text-2xl font-medium">Address</h3>
              <p>24, Nagdevi Street, Mandvi, Mumbai, Maharashtra, 400003</p>
            </div>
          </div>
          <div className="flex gap-6">
            <FaPhoneAlt className="text-2xl mt-2" />
            <div>
              <h3 className="text-2xl font-medium">Phone</h3>
              <p>Mobile: +(91) 2762774410</p>
              <p>Hotline: +(91) 5928685957</p>
            </div>
          </div>
          <div className="flex gap-6">
            <IoIosTime className="text-2xl mt-1" />
            <div>
              <h3 className="text-2xl font-medium">Working Time</h3>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <form className="flex-1 flex flex-col gap-10 lg:mt-0 mt-20">
          <label htmlFor="name" className="flex flex-col">
            <p className="mb-3">
              Your name: <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="border-2 border-slate-400 p-5 rounded-lg"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            <p className="mb-3">
              Email address: <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="border-2 border-slate-400 p-5 rounded-lg"
            />
          </label>
          <label htmlFor="subject" className="flex flex-col">
            <p className="mb-3">Subject:</p>
            <input
              type="text"
              id="subject"
              placeholder="Enter a subject"
              className="border-2 border-slate-400 p-5 rounded-lg"
            />
          </label>
          <label htmlFor="message" className="flex flex-col">
            <p className="mb-3">
              Message: <span className="text-red-500">*</span>
            </p>
            <textarea
              placeholder="Send us a message"
              id="message"
              rows="5"
              className="border-2 border-slate-400 p-5 rounded-lg"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-dark border-2 border-dark text-white hover:bg-white hover:text-dark transition p-5 font-medium text-lg rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Contact;
