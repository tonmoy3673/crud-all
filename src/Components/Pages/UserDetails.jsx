import { useLoaderData } from "react-router-dom";

const UserDetails =()=>{
    const user = useLoaderData();
    const {_id,name,email,age,details}=user;
    console.log(user);
    return (
        <div className="py-3 md:py-10 text-center">
            <h2 className="py-4">User Details</h2>
            <p>id : {_id}</p>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <p>Age : {age}</p>
            <p>Details : {details}</p>
        </div>
    )
};

export default UserDetails;