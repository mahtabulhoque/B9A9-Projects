import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Register from "../Register/Register";
import EstateDetails from "../EstateDetails/EstateDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/estate/:id',
                element:<PrivateRoutes><EstateDetails></EstateDetails></PrivateRoutes>,
                loader:()=> fetch('/estate.json'),
            },
            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>
            },

        {
            element: <ErrorPage></ErrorPage>,
        },

            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default router;
