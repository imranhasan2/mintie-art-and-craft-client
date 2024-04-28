import {
    createBrowserRouter,

} from "react-router-dom";
import Root from "../Root/Root";
import Homes from "../Pages/Homes";

 const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Homes></Homes>
            }

        ]
    },
]);

export default router;