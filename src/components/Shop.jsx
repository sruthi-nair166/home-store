import * as React from "react";
import { useState, useEffect } from "react";
import filter from "../assets/system-uicons_filtering.png";
import ShopBgHero from "./ShopBgHero";
import ShopBgFooter from "./ShopBgFooter";
import products from "../utils/data.js";
import ProductCard from "./ProductCard.jsx";
import { IoCloseSharp } from "react-icons/io5";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";

function Shop() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    priceRanges: [],
  });
  const [sortOption, setSortOption] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFilterOpen]);

  const [snackPack, setSnackPack] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState(undefined);

  React.useEffect(() => {
    if (snackPack.length && !messageInfo) {
      setMessageInfo({ ...snackPack[0] });
      setSnackPack((prev) => prev.slice(1));
      setOpen(true);
    } else if (snackPack.length && messageInfo && open) {
      setOpen(false);
    }
  }, [snackPack, messageInfo, open]);

  const handleClick =
    (message, undo = false, product = null) =>
    () => {
      setSnackPack((prev) => [
        ...prev,
        {
          message,
          undo,
          product,
          key: new Date().getTime(),
        },
      ]);
    };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  const handleUndo = () => {
    if (messageInfo?.product) {
      dispatch(addToWishlist(messageInfo.product));
    }
  };

  const handleCategoryChange = (category) => {
    setFilters((prev) => {
      const alreadySelected = prev.categories.includes(category);

      return {
        ...prev,
        categories: alreadySelected
          ? prev.categories.filter((c) => c !== category)
          : [...prev.categories, category],
      };
    });
  };

  const handleBrandChange = (brand) => {
    setFilters((prev) => {
      const alreadySelected = prev.brands.includes(brand);

      return {
        ...prev,
        brands: alreadySelected
          ? prev.brands.filter((b) => b !== brand)
          : [...prev.brands, brand],
      };
    });
  };

  const handlePriceRangeChange = (price) => {
    setFilters((prev) => {
      const alreadySelected = prev.priceRanges.includes(price);

      return {
        ...prev,
        priceRanges: alreadySelected
          ? prev.priceRanges.filter((p) => p !== price)
          : [...prev.priceRanges, price],
      };
    });
  };

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    const brandMatch =
      filters.brands.length === 0 || filters.brands.includes(product.brand);

    const priceMatch =
      filters.priceRanges.length === 0 ||
      filters.priceRanges.some((range) => {
        const discountedPrice =
          product.price * (1 - product.discountPercentage / 100);

        if (range === "above-5000") return discountedPrice > 5000;

        if (range === "3000-5000")
          return discountedPrice >= 3000 && discountedPrice <= 5000;

        if (range === "1000-2999")
          return discountedPrice >= 1000 && discountedPrice < 3000;

        if (range === "500-999")
          return discountedPrice >= 500 && discountedPrice < 1000;

        if (range === "100-499")
          return discountedPrice >= 100 && discountedPrice < 500;

        if (range === "below-100") return discountedPrice < 100;

        return false;
      });

    return categoryMatch && brandMatch && priceMatch;
  });

  const categories = [...new Set(products.map((p) => p.category))];

  const brands = [...new Set(products.map((p) => p.brand))];

  const priceRanges = [
    { id: "above-5000", label: "Above 5000" },
    { id: "3000-5000", label: "3000–5000" },
    { id: "1000-2999", label: "1000–2999" },
    { id: "500-999", label: "500–999" },
    { id: "100-499", label: "100–499" },
    { id: "below-100", label: "Below 100" },
  ];

  const productsPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = a.price * (1 - a.discountPercentage / 100);

    switch (sortBy) {
      case "Price: High to Low":
        return b.price * (1 - b.discountPercentage / 100) - priceA;
      case "Price: Low to High":
        return priceA - b.price * (1 - b.discountPercentage / 100);
      case "Rating: High to Low":
        return b.rating - a.rating;

      case "Rating: Low to High":
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

  const searchedProducts = sortedProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()),
  );

  const currentProducts = searchedProducts.slice(startIndex, endIndex);

  const startDisplay = startIndex + 1;
  const endDisplay = Math.min(endIndex, searchedProducts.length);

  return (
    <>
      <ShopBgHero title="Shop" />
      <div className="flex justify-between items-center bg-wheat px-24 py-6">
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex gap-2 border-e-2 border-slate-400"
          >
            <img src={filter} className="h-[25px]" alt="" />
            <span className="text-xl me-6">Filter</span>
          </button>
          <p>
            Showing {searchedProducts.length === 0 ? 0 : startDisplay}–
            {endDisplay} of {searchedProducts.length} results
          </p>
        </div>

        <div className="flex gap-6">
          <div className="relative w-72 flex items-center">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-4 px-4"
            />

            <IoSearchOutline className="absolute right-4 text-lg" />
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xl">Sort By</p>
            <FormControl className="bg-white" sx={{ m: 1, width: 150 }}>
              <InputLabel
                sx={{
                  "&.Mui-focused": {
                    color: "grey !important",
                  },
                }}
                id="grouped-select-label"
                htmlFor="grouped-select"
              >
                {sortOption === "price"
                  ? "Price"
                  : sortOption === "rating"
                    ? "Rating"
                    : "Default"}
              </InputLabel>
              <Select
                defaultValue=""
                id="grouped-select"
                label="Default"
                SelectDisplayProps={{
                  "aria-labelledby": "grouped-select-label",
                }}
                sx={{
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                }}
              >
                <ListSubheader>Price</ListSubheader>
                <MenuItem
                  onClick={() => {
                    setSortOption("price");
                    setSortBy("Price: High to Low");
                  }}
                  value="Price: High to Low"
                >
                  High to Low
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortOption("price");
                    setSortBy("Price: Low to High");
                  }}
                  value="Price: Low to High"
                >
                  Low to High
                </MenuItem>
                <ListSubheader>Rating</ListSubheader>
                <MenuItem
                  onClick={() => {
                    setSortOption("rating");
                    setSortBy("Rating: High to Low");
                  }}
                  value="Rating: High to Low"
                >
                  High to Low
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    setSortOption("rating");
                    setSortBy("Rating: Low to High");
                  }}
                  value="Rating: Low to High"
                >
                  Low to High
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-10 mx-24 my-16">
        {currentProducts.map((product) => {
          return <ProductCard product={product} handleClick={handleClick} />;
        })}
      </div>

      <div className="flex justify-center gap-6 mb-20">
        {searchedProducts.length === 0 ? (
          <p className="text-center text-2xl text-slate-400 mb-20">
            No items found.
          </p>
        ) : (
          <>
            {Array.from({
              length: Math.ceil(searchedProducts.length / productsPerPage),
            }).map((_, i) => (
              <button
                key={i}
                className={`${
                  i + 1 === currentPage ? "bg-dark text-white" : "bg-wheat"
                } text-xl rounded-lg w-14 h-14`}
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </>
        )}
      </div>

      <ShopBgFooter />

      {isFilterOpen && (
        <div className="fixed inset-0 bg-black/30 z-50">
          <div className="bg-white w-1/5 h-full pt-10 pb-6 px-8 absolute top-0 left-0 overflow-y-auto">
            <button onClick={() => setIsFilterOpen(false)}>
              <IoCloseSharp className="text-xl absolute top-6 right-8" />
            </button>
            <h2 className="text-2xl mb-4">Filters</h2>
            <p className="flex items-center justify-between mb-4 border-b-2 pb-2 border-slate-300">
              Category
            </p>
            <div className="flex flex-col ms-4 gap-1">
              {categories.map((c) => (
                <div className="flex items-center gap-2" key={c.id}>
                  <input
                    type="checkbox"
                    id={c}
                    checked={filters.categories.includes(c)}
                    onChange={() => handleCategoryChange(c)}
                  />
                  <label htmlFor={c}>{c}</label>
                </div>
              ))}
            </div>

            <p className="flex items-center justify-between mb-4 border-b-2 pb-2 border-slate-300 mt-6">
              Brand
            </p>
            <div className="flex flex-col ms-4 gap-1">
              {brands.map((b) => (
                <div className="flex items-center gap-2" key={b.id}>
                  <input
                    type="checkbox"
                    id={b}
                    checked={filters.brands.includes(b)}
                    onChange={() => handleBrandChange(b)}
                  />
                  <label htmlFor={b}>{b}</label>
                </div>
              ))}
            </div>

            <p className="flex items-center justify-between mb-4 border-b-2 pb-2 border-slate-300 mt-6">
              Price
            </p>
            <div className="flex flex-col ms-4 gap-1">
              {priceRanges.map((p) => (
                <div className="flex items-center gap-2" key={p.id}>
                  <input
                    type="checkbox"
                    id={p.id}
                    checked={filters.priceRanges.includes(p.id)}
                    onChange={() => handlePriceRangeChange(p.id)}
                  />
                  <label htmlFor={p.id}>{p.label}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Snackbar
        sx={{
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#fff",
            color: "#000",
          },
        }}
        key={messageInfo ? messageInfo.key : undefined}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        slotProps={{ transition: { onExited: handleExited } }}
        message={messageInfo ? messageInfo.message : undefined}
        action={
          messageInfo?.undo ? null : (
            <Link
              to="/wishlist"
              className="text-dark font-semibold tracking-widest mr-1"
              size="small"
              onClick={handleUndo}
            >
              VIEW
            </Link>
          )
        }
      />
    </>
  );
}

export default Shop;
