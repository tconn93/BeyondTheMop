import React from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "../HomePage";
import AdminLogin from '../../admin/AdminLogin';



function Desktop(){

    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage/>
        },
        {
            path: '/admin',
            element: <AdminLogin />
        }
    ]);
    
        return(<div>
        
    <RouterProvider router={router}/>
        </div>)
      }
    
    
      export default Desktop;