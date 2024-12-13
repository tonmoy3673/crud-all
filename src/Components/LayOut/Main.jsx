import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Main =()=>{
    return (
        <div className="mx-auto px-6 md:px-0">
            <Navbar/>
            <div className="">
            <Outlet/>
            </div>
            <Footer/>
        </div>
    )
};

export default Main;