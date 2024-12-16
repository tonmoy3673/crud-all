import { useEffect, useState } from "react";

const Users =()=>{
    const [users,setUsers]= useState([]);
    
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

        </div>
    )
};

export default Users;