

const User = ({user}) => {
    const {name,email,id,age}= user;
    return (
        <div className=" text-center p-5">
            <p>{id}</p>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{age}</p>
        </div>
    );
};

export default User;