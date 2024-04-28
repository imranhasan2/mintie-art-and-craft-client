import { NavLink } from "react-router-dom";


const Header = () => {

    const navbar = <>
        <li><NavLink to='/' style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "black",
            };
        }}>Home</NavLink></li>
        <li><NavLink to='art'
         style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>All Art & craft Items</NavLink></li>
        <li><NavLink to='item'
         style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Add Craft Item</NavLink></li>
        <li><NavLink to="list"  style={({ isActive}) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>My Art&Craft List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Mintie <br /> Art ANd Craft </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navbar
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Header;