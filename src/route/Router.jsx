import React from 'react';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
       index:true,
       element: <Homepage></Homepage>
      },
     {
      path:'/timeline',
      element:<Timeline></Timeline>
     },
     {
      path:'/status',
      element:<Status></Status>

     }
    ],
    errorElement:<Error></Error>
  },
]);

const Router = () => {
    return (
       <>
       
       </>
    );
};

export default Router;