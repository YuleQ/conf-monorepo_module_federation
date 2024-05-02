import { createBrowserRouter } from "react-router-dom";
import { App } from "../components/App/App";
import { Suspense } from "react";
import { LazyShop } from "@/pages/shop/Shop.lazy";

const routes = [
    {
        path: "/shop",
        element: <App/>,
        children: [
          {
              path: '/shop/main',
              element: <Suspense fallback ={'loading.....'}><LazyShop/></Suspense>
          },
          {
              path: '/shop/second',
              element: <Suspense fallback ={'loading.....'}><div style={{color: 'red'}}> fdfgdgfd</div></Suspense>
          }
        ]  
      },
]

export const router = createBrowserRouter(routes);

export default routes