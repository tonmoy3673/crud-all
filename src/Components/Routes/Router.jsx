import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../LayOut/Main";
import About from "../Pages/About";
import AddProducts from "../Pages/AddProducts";
import UserDetails from "../Pages/UserDetails";

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
                path:'/users/:id',
                element:<UserDetails/>,
                loader:({params})=>fetch(`http://localhost:5000/users/${params.id}`)
            },

            {
                path:'/add',
                element:<AddProducts/>
            }
        ]
    }
])