import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Homes from "../Pages/Homes";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Form from "../Form/Form";
import ViewDetails from "../ViewDetails/ViewDetails";
import AddCraftItem from "../Pages/AddCraftItem";
import Protected from "../Protected/Protected";
import AllArtAndCraftItem from "../Pages/AllArtAndCraftItem";
import ArtViewDetails from "../Pages/ArtViewDetails";
import MyArtAndCraftList from "../Pages/MyArtAndCraftList";
import Update from "../Pages/Update";




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
                path: '/login',
                element: <Login></Login>,
            }, {
                path: '/register',
                element: <Register></Register>
            }, {
                path: '/form',
                element: <Form></Form>
            }, {

            },
            {
                path: '/viewDetails/:id',
                element: <ViewDetails></ViewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/craft/${params.id}`)
            }, {
                path: '/addCraftItem',
                element: <Protected> <AddCraftItem></AddCraftItem></Protected>
            }, {
                path: '/art',
                element: <AllArtAndCraftItem></AllArtAndCraftItem>,
            },
            {
                path: '/artView/:id',
                element: <Protected>
                    <ArtViewDetails></ArtViewDetails>
                </Protected>,
                loader: ({ params }) => fetch(`http://localhost:5000/artView/${params.id}`)
            }, {
                path: '/my',
                element: <Protected>
                    <MyArtAndCraftList></MyArtAndCraftList>
                </Protected>,
              
            },{
                path: '/update',
                element:<Protected>
                    <Update></Update>
                </Protected>
            }

        ]
    },
]);

export default router;