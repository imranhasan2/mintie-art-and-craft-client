import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { key } from "localforage";
import MyartCraft from "./MyartCraft";


const MyArtAndCraftList = () => {

    const { user } = useContext(AuthContext)
    const [items, setItem] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/my/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 mt-8 mb-8 gap-4">
            {
                items.map(item =><MyartCraft key={item._id} item={item}></MyartCraft>)
            }
        </div>
    );
};

export default MyArtAndCraftList;