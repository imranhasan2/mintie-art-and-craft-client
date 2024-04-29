import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Homes from "../Pages/Homes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Form from "../Form/Form";
import ViewDetails from "../ViewDetails/ViewDetails";




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
            {
                path:'/viewDetails/:id',
                element:<ViewDetails></ViewDetails>,
                loader:({params}) => fetch(`http://localhost:5000/craft/${params.id}`)
            }

        ]
    },
]);

export default router;