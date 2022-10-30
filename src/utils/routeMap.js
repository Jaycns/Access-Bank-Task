import App from "../App";
import Apis from "../pages/apis";
import Application from "../pages/application";
import Forum from "../pages/forum";
import Products from "../pages/products";

export const RouteMap = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/apis",
    element: <Apis />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/application",
    element: <Application />,
  },
  {
    path: "/forum",
    element: <Forum />,
  },
];
