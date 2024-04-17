import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import Register from "../Register/Register";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    }
]);
export default router;
