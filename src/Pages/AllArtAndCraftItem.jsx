import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";


const AllArtAndCraftItem = () => {

    const { user } = useContext(AuthContext)

    const [item, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/art/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])



    return (
        <div className="overflow-x-auto mt-10 mb-10">
            <table className="min-w-full divide-y divide-gray-200 shadow-md">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">No.</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sub Category</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prices</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {item.map((p, index) => (
                        <tr key={p._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.itemName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.subcategoryName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">${p.Price}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{p.Stock_Status}</td>
                            <td className="px-6 py-4 whitespace-nowrap"><Link  to={`/artView/${p._id}`}>
                            <button className="btn btn-outline">View Details</button>
                            </Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>



    );
};

export default AllArtAndCraftItem;