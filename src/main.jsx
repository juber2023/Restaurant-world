import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Components/MainLayout.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import Blog from './Components/Blog.jsx';
import Recipe from './Components/Recipe.jsx';
import ContextApi from './Components/ContextApi.jsx';
import NewRegister from './Components/NewRegister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <p>Not found</p>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('https://server-api-two.vercel.app/chef')
      },
      {
        path:'/login',
        element:<Login></Login> ,
      },
      {
        path:'/register',
        element:<NewRegister></NewRegister>,
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
      },
      {
        path:'/chef/:id',
        element:<Recipe></Recipe>,
        loader:()=>fetch(`https://server-api-two.vercel.app/chef`)
      },
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
    <RouterProvider router={router} />
    </ContextApi>
    
  </React.StrictMode>,
)
