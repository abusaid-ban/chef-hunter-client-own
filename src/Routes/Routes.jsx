import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Shared/Home/Login/Login";
import Blog from "../Shared/Home/Blog/Blog";
import Home from "../Shared/Home/Home/Home";
import Register from "../Shared/Home/Register/Register";
import DetailsPage from "../Shared/Home/DetailsPage/DetailsPage";
import ErrorPage from "../error-page";


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
     },
     {
      path:'/register',
      element:<Register></Register>
     },
     {
      path:'/category/:id',
      element:<DetailsPage></DetailsPage>,
      loader: ({params})=> fetch('http://localhost:5000/details')
     }
     
    ]
  },
  {
    path: "/*",
    element: <ErrorPage />,
    // errorElement: <ErrorPage />,
  }
   
 
]);

export default router;