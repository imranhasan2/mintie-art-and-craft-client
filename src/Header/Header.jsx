import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {

    const { user, logOut } = useContext(AuthContext)

    const navbar = <>
        <li><NavLink to='/' style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to='art'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}>All Art & craft Items</NavLink></li>
        <li><NavLink to='addCraftItem'
            style={({ isActive }) => {
                return {
                    fontWeight: isActive ? "bold" : "",
                    backgroundColor: isActive ? "green" : "",
                };
            }}>Add Craft Item</NavLink></li>
        <li><NavLink to="list" style={({ isActive }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                backgroundColor: isActive ? "green" : "",
            };
        }}>My Art&Craft List</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 max-w-6xl mx-auto">
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
                <a className="btn btn-ghost text-xl text-teal-500">Mintie <br /> Art ANd Craft </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navbar
                    }
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                   <div className="relative flex gap-3">
                   {/* Render user's photo with a fallback image */}
                   <img src={user?.photoURL || "https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"} alt="User" className="w-10 h-10 rounded-full cursor-pointer" />
               
                   {/* Render display name on hover */}
                   <span className="absolute top-0 left-full ml-2 bg-white p-1 rounded-md opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                       {user.displayName}
                   </span>
               
                   {/* Render logout button */}
                   <button className="bg-green-500 px-3 py-1 rounded-xl" onClick={logOut}>
                       LogOut
                   </button>
               </div>
               
                    : <div>
                        <Link to='/login' className="btn bg-red-500 text-white mr-5">Login</Link>
                        <Link to="/register" className="btn bg-blue-500 text-white">Register</Link>

                    </div>

                }
            </div>
        </div>
    );
};

export default Header;