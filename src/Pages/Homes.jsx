
import Banner from "../Banner/Banner";
import CraftCard from "../CraftCard/CraftCard";
import { useLoaderData } from "react-router-dom";
import NewArrival from "../ExtraSection/NewArrival";
import Choose from "../ChooseUs/Choose";





const Homes = () => {
    const loadedCrafts = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mt-5">
                <h2 className="text-3xl font-bold text-blue-800 mb-8">
                    Explore Our Craft Items
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-8 gap-3">
                {loadedCrafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>).slice(0, 6)}
            </div>
            
            <NewArrival></NewArrival>
            <Choose></Choose>


        </div>
    );
};

export default Homes;