

const MyartCraft = ({ item }) => {


    const { image, itemName, subcategoryName, Short_description, Price, Rating, Customization, processing_time, Stock_Status, } = item

    return (
        <div>

            <div  >
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img className="h-[350px]" src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {itemName}
                            <div className="badge badge-secondary py-4">{subcategoryName}</div>
                        </h2>
                        <p>{Short_description.slice(0,50)}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-outline">Fashion</div>
                            <div className="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyartCraft;