import { Link } from "react-router-dom";



const CraftCard = ({ craft }) => {
    console.log(craft)
    const { _id, photo, name, description, } = craft;



    return (
        <div className="card w-96 bg-base-100 shadow-xl p-4 rounded-lg">
            <figure>
                <img className="h-[350px] w-full object-cover" src={photo} alt={name} />
            </figure>
            <div className="card-body mt-4">
                <h2 className="card-title text-xl font-bold text-gray-900 mb-2">{name}</h2>
                <p className="text-sm text-gray-700 mb-4">{description.slice(0,80)}</p>
              
                <div className="card-actions flex justify-end">
                    <Link to={`/viewDetails/${_id}`}>
                        <button className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md  ">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;