import Button from "@/components/common/Button";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";



const Users: React.FC<UserProps[]> = ({users}) => {
  console.log(users)
  return (
    <div>
      <Header />
      <main className="p-5">
        <div className="flex justify-between ">
          <h2>Users Content</h2>
          <Button title={`Add User`} styles={`bg-blue-600 px-3 text-white rounded-full`} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {
            users.map(({name, email, phone, username}: UserProps, key: number) => {
              return (
                <UserCard name={name} email={email} phone={phone} username={username} key={key} />
              )
            })
          }
        </div>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(response.ok){
      const users = await response.json();
      return {
        props: {
          users
        }
      }
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        users: []
      }
    }
  }
}

export default Users;