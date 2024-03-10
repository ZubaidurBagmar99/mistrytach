import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import HomeInterior from "../pages/Residential/HomeInterior";
import Residential from "../pages/Residential/Residential";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"/residential",
            element: <Residential></Residential>
        },
        {
            path: "/home-interior",
            element: <HomeInterior />
        }

    ]
  },
]);

export default router;
