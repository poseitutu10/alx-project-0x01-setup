import { UserProps } from "@/interfaces";


const UserCard: React.FC<UserProps> = ({name, username, email, address, phone, website, company}) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-sky-500 to-purple-600 p-3 rounded-xl">
      <div className="text-sm text-white">
        <h2>Name: {name}</h2>
        <p>Email: {email}</p>
        <p>Phone no: {phone}</p>
        <p>Username: {username}</p>
      </div>
    </div>
  );
}

export default UserCard;