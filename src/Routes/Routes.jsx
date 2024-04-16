import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import UserProfile from "../UserProfile/UserProfile";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/update-profile',
                element:<UpdateProfile></UpdateProfile>
            },
            {
                path:'/user-profile',
                element:<UserProfile></UserProfile>
            }
        ]
    }
]);
export default router;
