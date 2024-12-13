import { Link, NavLink } from "react-router-dom";

const Navbar=()=>{

   
    return (
        <div className="py-5 md:py-8 flex items-center justify-between px-5 md:px-0 ">
            <div>
                <Link to='/home' className="uppercase text-2xl text-teal-600 font-semibold ">All <span className="text-amber-500">Crud</span></Link>
            </div>
            <nav className="flex gap-x-4 md:gap-x-8 mx-auto">
                <NavLink className="text-teal-600 font-semibold hover:text-amber-500 hover:scale-110 transition-all duration-400">
                    Home
                </NavLink>
                <NavLink className="text-teal-600 font-semibold hover:text-amber-500 hover:scale-110 transition-all duration-400">
                    About
                </NavLink>
                
                <NavLink className="text-teal-600 font-semibold hover:text-amber-500 hover:scale-110 transition-all duration-400">
                    Feedback
                </NavLink>
                <NavLink to='/add' className="text-teal-600 font-semibold hover:text-amber-500 hover:scale-110 transition-all duration-400">
                    Add Users
                </NavLink>
            </nav>
        </div>
    )
};

export default Navbar;