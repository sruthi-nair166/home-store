import AboutImg from "../assets/about_img.jpg";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Img1 from "../assets/about/1.jpg";
import Img2 from "../assets/about/2.jpg";
import Img3 from "../assets/about/3.jpg";
import Img4 from "../assets/about/4.jpg";
import Img5 from "../assets/about/5.jpg";
import Img6 from "../assets/about/6.jpg";
import Img7 from "../assets/about/7.jpg";
import Img8 from "../assets/about/8.jpg";
import Img9 from "../assets/about/9.jpg";
import Img10 from "../assets/about/10.jpg";
import Img11 from "../assets/about/11.jpg";
import Img12 from "../assets/about/12.jpg";

const itemData = [
  {
    img: Img1,
    title: "",
  },
  {
    img: Img2,
    title: "",
  },
  {
    img: Img3,
    title: "",
  },
  {
    img: Img4,
    title: "",
  },
  {
    img: Img5,
    title: "",
  },
  {
    img: Img6,
    title: "",
  },
  {
    img: Img7,
    title: "",
  },
  {
    img: Img8,
    title: "",
  },
  {
    img: Img9,
    title: "",
  },
  {
    img: Img10,
    title: "",
  },
  {
    img: Img11,
    title: "",
  },
  {
    img: Img12,
    title: "",
  },
];

function About() {
  return (
    <div className="mt-[80px]">
      <div className="text-center sm:mx-24 mx-12">
        <h1 className="text-5xl font-semibold mb-8 mt-40">
          Your Home, Curated.
        </h1>
        <p className="text-slate-500 sm:text-center text-left mb-28">
          From handcrafted furniture to essential kitchenware, we source
          timeless pieces designed to turn your everyday house into a personal
          sanctuary.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start sm:gap-10 lg:gap-16 mx-10 lg:mx-24">
        <div className="flex-1">
          <h2 className="text-4xl font-medium mb-8">What Sets Us Apart</h2>
          <p className="text-slate-500 mb-10 lg:mb-16 leading-loose">
            We believe that a house only becomes a home when it reflects the
            people living inside it. From handcrafted furniture that anchors
            your living room to delicate decor accents that catch the morning
            light, we curate pieces that blend timeless aesthetics with everyday
            functionality. Our mission is to help you create a space that feels
            personal, comfortable, and uniquely yours.
          </p>
          <Link
            to="/"
            className="inline-block border-2 border-dark text-dark hover:bg-dark hover:text-white transition px-6 py-3"
          >
            Explore the Essentials
          </Link>
        </div>

        <img
          src={AboutImg}
          className="w-full lg:w-[40%] max-w-[600px] h-auto lg:self-stretch object-cover rounded-xl mt-10 lg:mt-0"
          alt="About Us"
        />
      </div>

      <div className="flex md:flex-row flex-col gap-12 mt-28 sm:px-24 px-14 sm:py-40 py-20 bg-wheat">
        <div className="flex-1">
          <h2 className="text-4xl font-medium mb-12">
            Have a Look at Our Unique Selling Proportions
          </h2>
          <Link
            to="/shop"
            className="bg-dark border-2 border-dark text-white hover:bg-white hover:text-dark transition px-6 py-3"
          >
            Browse our Products
          </Link>
        </div>
        <div className="flex-1">
          <p className="text-slate-600 mb-14">
            We’ve stripped away the middleman to bring you designer-grade home
            essentials without the inflated price tags. Our collection is a
            careful balance of durability, style, and sustainable sourcing.
          </p>
          <div className="flex sm:flex-row flex-col gap-x-16 gap-y-8 md:mt-0 mt-20">
            <div>
              <p className="text-5xl font-medium mb-2">99%</p>
              <p className="font-semibold mb-3">Customer Satisfaction Rate</p>
              <p className="text-slate-600">
                Our community relies on us for consistent quality and a seamless
                shopping experience from click to delivery.
              </p>
            </div>
            <div>
              <p className="text-5xl font-medium mb-2">100%</p>
              <p className="font-semibold mb-3">Ethically Sourced Materials</p>
              <p className="text-slate-600">
                From FSC-certified timber to non-toxic kitchen finishes, we
                ensure every item in your home is safe for your family and the
                planet.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-medium mt-24 mb-12 text-center">
          Our Collections
        </h2>

        <ImageList variant="woven" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=161&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default About;
