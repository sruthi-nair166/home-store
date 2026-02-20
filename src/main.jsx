import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import Root from "./routes/Root";
import Home from "./components/Home";
import ShopBg from "./components/ShopBg";
import Shop from "./components/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        element: <ShopBg />,
        children: [{ path: "shop", element: <Shop /> }],
      },
    ],
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
