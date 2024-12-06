import { useContext } from "react";
import { AuthContext } from "../auth provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Page/Loading";


const PrivetRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
        <Navigate to={'/login'}></Navigate>
    );
};

export default PrivetRoute;