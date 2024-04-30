import { useLoaderData } from "react-router-dom";


const ViewDetails = () => {

    const loadedCraft = useLoaderData()
    const {  photo, name, description, price } = loadedCraft;
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
            <img src={photo} className="max-w-lg rounded-lg shadow-2xl" alt={name} />
            <div className="ml-8">
                <h1 className="text-5xl font-bold text-gray-800">{name.slice(0, 15)}</h1>
                <p className="py-6 text-gray-700">{description}</p>
                <p className="text-green-600 font-bold text-xl">Price: ${price}</p>
            </div>
        </div>
    </div>
    );
};

export default ViewDetails;