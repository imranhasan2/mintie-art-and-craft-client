import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Homes from "../Pages/Homes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Form from "../Form/Form";




 const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>,
                loader: () => fetch('http://localhost:5000/craft')
                
            },
            {
                path:'/login',
                element: <Login></Login>,
            },{
                path: '/register',
                element:<Register></Register>
            },{
               path: '/form',
               element: <Form></Form>
            },{
                
            },

        ]
    },
]);

export default router;