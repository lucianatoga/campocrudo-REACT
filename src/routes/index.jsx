import MainLayout from "@/layouts/MainLayout";
import AllProducts from "@/pages/AllProducts";
import Category from "@/pages/Category";
import Home from "@/pages/Home";
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
                path:'/:id',
                element:<SingleProduct/>
            }
        ]
    }
]

export const router = createBrowserRouter(routes)