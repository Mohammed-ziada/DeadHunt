import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
 



import { Cart, CheckOut, Category, Home } from "./routes_Component.routes";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "category", element: <Category /> },
      { path: "checkOut", element: <CheckOut /> },
    ],
  },
]);

export default routes;
