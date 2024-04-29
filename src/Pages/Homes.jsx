
import Banner from "../Banner/Banner";
import CraftCard from "../CraftCard/CraftCard";
import { useLoaderData } from "react-router-dom";




const Homes = () => {
    const loadedCrafts = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-8 gap-3">
                {loadedCrafts.map(craft => <CraftCard key={craft._id} craft={craft}></CraftCard>).slice(0,6)}
            </div>

        </div>
    );
};

export default Homes;