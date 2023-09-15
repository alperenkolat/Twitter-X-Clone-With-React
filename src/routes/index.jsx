import { createBrowserRouter } from "react-router-dom";
import Explore from "../pages/explore";
import Home from "../pages/home";
import MainLayout from "../layouts/main";
import { Children } from "react";
const routes=createBrowserRouter([


    
    {
        path:'/',
        element:<MainLayout/>,
        children:[{index:true,
            element:<Home/>
        },   {
            path:'/explore',
            element:<Explore/>
        }]
    }
 
]
)

export default routes
