import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const loadedCraft = useLoaderData()
    return (
        <div>
            {loadedCraft.length}
        </div>
    );
};

export default ViewDetails;