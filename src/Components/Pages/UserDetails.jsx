import { useLoaderData } from "react-router-dom";

const UserDetails =()=>{
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>User Details</h2>

        </div>
    )
};

export default UserDetails;