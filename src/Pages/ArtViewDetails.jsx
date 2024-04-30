import { useLoaderData } from "react-router-dom";


const ArtViewDetails = () => {

    const loadData = useLoaderData()

    const { image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status,  } = loadData
    return (
        <div className="flex justify-center items-center h-screen bg-base-200 font-serif">
            <div className="flex flex-col lg:flex-row bg-white p-8 rounded-lg shadow-xl">
                <img src={image} alt={itemName} className="max-w-sm rounded-lg shadow-2xl mb-4 lg:mb-0 lg:mr-8" />
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-800">{itemName}</h1>
                    <p className="text-gray-600 mb-2">{subcategoryName}</p>
                    <p className="text-gray-700 mb-4">{Short_description}</p>
                    <div className="flex flex-col lg:flex-row mb-4">
                        <p className="text-green-800 mr-4">Price: ${Price}</p>
                        <p className="text-yellow-800 mr-4">Rating: {Rating}</p>
                        <p className="text-blue-800 mr-4">Customization: {Customization}</p>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <p className="text-indigo-800 mr-4">Processing Time: {processing_time}</p>
                        <p className="text-purple-800 mr-4">Stock Status: {Stock_Status}</p>
                        
                    </div>
                    <button className="btn btn-primary mt-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default ArtViewDetails;