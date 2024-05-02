
import Banner from "../Banner/Banner";
import CraftCard from "../CraftCard/CraftCard";
import { useLoaderData } from "react-router-dom";
import NewArrival from "../ExtraSection/NewArrival";
import Choose from "../ChooseUs/Choose";
import { Typewriter } from "react-simple-typewriter";





const Homes = () => {
    const loadedCrafts = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <div className="text-center mt-5">
                <h1 className="font-extrabold text-2xl text-fuchsia-300">
                    <span style={{ color: '#6B7280', fontWeight: 'bold' }}> {/* Gray color */}
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Explore Our Craft!!']}
                            loop={5}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                
                </h1>
                <p className="text-gray-400 font-medium mt-5">Discover a world of creativity with our collection <br />
                    of artisanal craft items. From handmade pottery to intricately woven textiles,<br />
                    each piece tells a unique story crafted with passion and skill.</p>

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