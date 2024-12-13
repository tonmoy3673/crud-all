import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../LayOut/Main";
import About from "../Pages/About";
import AddProducts from "../Pages/AddProducts";

export const Router =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/add',
                element:<AddProducts/>
            }
        ]
    }
])