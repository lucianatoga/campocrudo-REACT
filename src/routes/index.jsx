import MainLayout from "@/layouts/MainLayout";
import AllProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart";
import Category from "@/pages/Category";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import SingleProduct from "@/pages/SingleProduct";
import { createBrowserRouter } from "react-router";

const routes=[
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/products',
                element:<AllProducts/>
            },
            {
                path:'/category/:id',
                element:<Category/>
            },
            {
                path:'/product/:id',
                element:<SingleProduct/>
            },
            {
                path:'/cart',
                element:<Cart/>
            },
            {
                path:'*',
                element:<NotFound/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)