import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddCraftItem = () => {

    const {user} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()

        const form = e.target;
        const image = form.image.value;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;

        const Short_description = form.shortDescription.value;

        const Price = form.price.value;
        const Rating = form.Rating.value;
        const Customization = form.customization.value;

        const processing_time = form.processingTime.value;

        const Stock_Status = form.stockStatus.value;
        const email =user.email
        console.log(image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status, email)
        const userItem = { image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status, email }


        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: 'success',
                    text: 'you have successfully added data',
                    icon: 'success',
                    confirmButtonText: 'ok'
                    
                  })
            })





    }






    return (
        <div className="mx-auto max-w-md p-4 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label className="mb-1">Image URL:</label>
                    <input type="text" name="image" placeholder="Image_Url" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Item Name:</label>
                    <input type="text" name="itemName" placeholder="Item_Name" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Subcategory Name:</label>
                    <input type="text" name="subcategoryName" placeholder="SUbCategories" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Short Description:</label>
                    <textarea name="shortDescription" placeholder="Short_description" className="border rounded-md px-3 py-2" required></textarea>
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Price:</label>
                    <input type="text" name="price" placeholder="price" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Rating:</label>
                    <input type="text" name="Rating" placeholder="Rating" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Customization:</label>
                    <input type="text" name="customization" placeholder="Customization" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Processing Time:</label>
                    <input type="text" name="processingTime" placeholder="processing_time" className="border rounded-md px-3 py-2" required />
                </div>
                <div className="flex flex-col">
                    <label className="mb-1">Stock Status:</label>
                    <input type="text" name="stockStatus" placeholder="Stock_Status" className="border rounded-md px-3 py-2" required />
                </div>
               
                
                <input type="submit" value="Add Item" className="w-full bg-blue-600 text-white py-2 px-3" />
            </form>
        </div>
    );
};

export default AddCraftItem;