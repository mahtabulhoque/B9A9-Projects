import {useContext } from "react";
import { AuthContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/update-profile'></Navigate>
};

export default PrivateRoutes;