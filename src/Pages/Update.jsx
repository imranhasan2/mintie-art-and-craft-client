

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

   

    const loadData =useLoaderData()
    console.log(loadData)

    const { _id, image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status, } = loadData;

 




    const handleUpdate = e => {
        e.preventDefault()

        const form = e.target;
        const image = form.image.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;

        const Short_description = form.Short_description.value;

        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const Customization = form.Customization.value;

        const processing_time = form.processing_time.value;

        const Stock_Status = form.Stock_Status.value;

        // console.log(image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status,)
        const updateItem = {_id, image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status, }


        fetch(`https://mintie-art-and-craft-server.vercel.app/update/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0)
                    Swal.fire({
                        title: 'success',
                        text: 'you have successfully updated Item',
                        icon: 'success',
                        confirmButtonText: 'ok'

                    })
            })





    }





    return (

        <div>

            <div className="mt-5 mb-5">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Item {itemName}</h2>
                    <form onSubmit={handleUpdate}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Image</label>
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Item Name</label>
                                <input
                                    type="text"
                                    name="itemName"
                                    defaultValue={itemName}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subcategory Name</label>
                                <input
                                    type="text"
                                    name="subcategoryName"
                                    defaultValue={subcategoryName}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Short Description</label>
                                <textarea
                                    name="Short_description"
                                    defaultValue={Short_description}
                                    rows="3"
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="number"
                                    name="Price"
                                    defaultValue={Price}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Rating</label>
                                <input
                                    type="text"
                                    name="Rating"
                                    defaultValue={Rating}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Customization</label>
                                <select
                                    name="Customization"
                                    defaultValue={Customization}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-red-500 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    <option value="">Select</option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Processing Time</label>
                                <input
                                    type="text"
                                    name="processing_time"
                                    defaultValue={processing_time}
                                    className="mt-1 block w-full rounded-md border border-red-500 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Stock Status</label>
                                <select
                                    name="Stock_Status"
                                    defaultValue={Stock_Status}
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-red-500 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                >
                                    <option value="">Select</option>
                                    <option value="In Stock">In Stock</option>
                                    <option value="Made to Order">Made to Order</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>

    );
};

export default Update;