import { useEffect, useState } from "react";
import User from "./User";

const Users =()=>{
    const [users,setUsers]= useState([]);
    const [userLength,setUserLength]=useState(3);
    
    useEffect(()=>{
    const fetchUsers =async ()=>{
    const res= await fetch('http://localhost:5000/users');
    const data = await res.json();
    setUsers(data);
        }
        fetchUsers()
    },[])
   
console.log(users);
    return (
        <div>
            <div className="pb-5">
                <h2 className="text-green-600 text-2xl font-semibold py-4 text-center">All Users</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center mt-9">
                {
                    users && users.slice(0,userLength).map((user)=><User key={user._id} user={user}/>)
                }
            </div>
            <div className="mt-5 text-center ">
                <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm transform hover:scale-110 transition-transform duration-500">Show More</button>
            </div>
        </div>
    )
};

export default Users;