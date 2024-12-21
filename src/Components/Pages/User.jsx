

const User = ({user}) => {
    const {name,email,id,age}= user;
    return (
        <div className=" text-center p-5">
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{age}</p>
            <div className="py-4 md:py-8 ">
                <button className="bg-green-700 py-2 px-3 rounded-md text-sm text-white hover:scale-110 transition-transform duration-300 cursor-pointer">Details</button>
            </div>
        </div>
    );
};

export default User;