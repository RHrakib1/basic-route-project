import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Posts from './Component/Posts/Posts.jsx';
import Cpost from './Component/Cpost/Cpost.jsx';
import Users from './Component/Users/Users.jsx';
import ShowUser from './Component/ShowUsers/ShowUser.jsx';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/Contact',
        element:<Contact></Contact>
      },
      {
        path:'/posts',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`),
        element:<Cpost></Cpost>
      },
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userid',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element:<ShowUser></ShowUser>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
