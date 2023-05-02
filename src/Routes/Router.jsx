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
      {
        path: "chef",
        element: <Chef></Chef>,
        loader: () => fetch("http://localhost:5000/chef"),
      },
    ],
  },
]);

export default router