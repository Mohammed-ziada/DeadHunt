import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import { Cart, CheckOut, Category, Home } from "./routes_Component.routes";
import NotFound from "../pages/NotFound";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "category", element: <Category /> },
      { path: "checkOut", element: <CheckOut /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default routes;
