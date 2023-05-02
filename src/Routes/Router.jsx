import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home"
import Main from "../Layouts/Main"
import Chef from "../Pages/Chef/Chef";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
     
    ],
  },
]);

export default router