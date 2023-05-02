import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Home/Login/Login";
import Blog from "../Shared/Home/Blog/Blog";
import Home from "../Shared/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path: '/login',
        element: <Login></Login>
      },
     {
      path:'/blog',
      element:<Blog></Blog>
     }
    ]
  },
]);

export default router;