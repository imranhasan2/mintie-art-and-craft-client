import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftList = () => {

    const { user,} = useContext(AuthContext)
    const [items, setItem] = useState([])
    const [selectedCustomization, setSelectedCustomization] = useState('')

    useEffect(() => {
        fetch(`https://mintie-art-and-craft-server.vercel.app/my/${user?.email}`)
            .then(res => res.json())
            .then(data => {

                setItem(data)
            })
    }, [user])





    const handleDelete = (itemId) => {
        console.log(itemId)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed > 0) {

                fetch(`http://localhost:5000/my/${itemId}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        setItem(items.filter(item => item._id !== itemId));
                        console.log(data)
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted deleted.",
                            icon: "success"



                        });
                    })



            }
        });




    };


    const handleCustomizationFilterChange = (e) => {
        setSelectedCustomization(e.target.value)
    }



    const filterCustomize = selectedCustomization ? items.filter(item => item.Customization === selectedCustomization) : items


    return (

        <div>
            
            <div className="flex justify-center mb-6">
                <select
                    className="form-select w-64 p-2"
                    onChange={handleCustomizationFilterChange}
                    value={selectedCustomization}
                >
                    <option value="">Filter by Customization</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterCustomize.map(item => (
                    <div key={item._id} className="card bg-base-100 shadow-xl">
                        <figure><img className="h-[350px]" src={item.image} alt={item.itemName} /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {item.itemName}
                                <div className="badge badge-secondary py-4">{item.subcategoryName}</div>
                            </h2>
                            <p>{item.Short_description.slice(0, 50)}</p>
                            <div className="flex justify-between items-center">
                                <div className="text-lg font-semibold">${item.Price}</div>
                                <div className="flex space-x-2">
                                    <div className="badge badge-outline">{item.Customization}</div>
                                    <div className="badge badge-outline">{item.Stock_Status}</div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-4 space-x-4">
                                <Link to={`/update/${item._id}`}>
                                    <button className="btn btn-primary"><MdOutlineSystemSecurityUpdateGood size={24} /> Update</button>
                                </Link>
                                <button className="btn btn-danger bg-orange-500" onClick={() => handleDelete(item._id)}> <RiDeleteBinLine size={24} />  Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArtAndCraftList;