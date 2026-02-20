import ShopBgHero from "./ShopBgHero";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import ShopBgFooter from "./ShopBgFooter";

function Contact() {
  return (
    <>
      <ShopBgHero title="Contact" />
      <div className="text-center mt-24 mb-16">
        <h2 className="text-4xl font-semibold mb-2">Get In Touch With Us</h2>
        <p className="text-slate-400 mx-56">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>

      <div className="flex gap-48 mx-40 mb-24">
        <div className="flex flex-col gap-10">
          <div className="flex gap-6">
            <FaLocationDot className="text-2xl mt-1" />
            <div>
              <h3 className="text-2xl font-medium">Address</h3>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>
          <div className="flex gap-6">
            <FaPhoneAlt className="text-2xl mt-2" />
            <div>
              <h3 className="text-2xl font-medium">Phone</h3>
              <p>Mobile: +(84) 546-6789</p>
              <p>Hotline: +(84) 456-6789</p>
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

        <form className="flex-grow flex flex-col gap-10">
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
          <button className="bg-dark text-white p-5 rounded-lg">Submit</button>
        </form>
      </div>

      <ShopBgFooter />
    </>
  );
}

export default Contact;
