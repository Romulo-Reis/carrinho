import { createBrowserRouter } from "react-router";
import { Home } from "./page/home";
import { Cart } from "./page/cart";

import { Layout } from "./components/layout";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])

export { router };