
import userImage from "../../assets/Images/user.jpg";
const AddProducts =()=>{

    return(
        <div className="grid grid-cols-1 md:grid-cols-5 items-center justify-center py-6">
            <div className="md:col-span-3">
                <img src={userImage} className="rounded-lg"/>
            </div>
            
            <div className="md:col-span-2 -ms-0 md:-ms-20">
                <form className="bg-slate-600 py-4 md:py-8 px-3 md:px-6 rounded-xl">
                <h2 className="mb-6 text-center text-xl text-white">Add Product Here</h2>
                    <div className="text-white text-center mb-5 pt-3">
                        <label htmlFor="name">Name : </label>
                        <input id="name" className="px-2 rounded-md" type="text" placeholder="Enter Name"/>
                    </div>
                    <div className="text-white text-center mb-5">
                        <label htmlFor="email">Email : </label>
                        <input id="email" className="px-2 rounded-md" type="email" placeholder="Enter Email"/>
                    </div>
                    <div className="text-white text-center mb-5">
                        <label htmlFor="age">Age : </label>
                        <input id="age" className="px-2 rounded-md" type="text" placeholder="Enter Age"/>
                    </div>
                    <div className="text-white text-center py-3 mt-3">
                        <button type="submit" className="bg-teal-600 px-3 py-2 rounded-md text-sm">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AddProducts;