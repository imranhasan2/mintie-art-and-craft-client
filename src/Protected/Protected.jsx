import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";


const Protected = ({ children }) => {


    const { user,loader } = useContext(AuthContext)


    if(loader){
        return <span className="loading loading-spinner loading-lg mt-5 mb-5 "></span>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default Protected;