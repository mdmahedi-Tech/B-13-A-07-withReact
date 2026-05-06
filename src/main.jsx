import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { createBrowserRouter } from 'react-router'
import MainLayout from './layout/MainLayout.jsx'
import Error from './Components/errorpage/Error.jsx'
import Timeline from './Components/timelilne/Timeline.jsx'
import Status from './Components/status/Status.jsx'
import Homepage from './Components/homepage/Homepage.jsx'
import ShowDetails from './Components/homepages/ShowDetails.jsx'
import ContextApiProvider from './contextApi/ContextApiProvider.jsx'


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
      path:'/homepage',
      element:<Homepage></Homepage>
      },
      {
      path:'/homepage/:dynamicId',
      element:<ShowDetails></ShowDetails>
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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApiProvider>
<RouterProvider router={router} />,
    </ContextApiProvider>
      

  </StrictMode>,
)
