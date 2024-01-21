import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import "./App.css";
import { User } from "./types/type";

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); //會直接infer type
  const handleAddUser = (name: string, age: number, email: string) => {
    setUsers((prevUsers) => {
      const user: User = {
        id: crypto.randomUUID(),
        name,
        age,
        email,
      };
      return [...prevUsers, user];
    });
  }
  const handleDeleteUser = (id: string) => {
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => user.id !== id);
    });
  }

  return (
    <div>
      <AddUser handleAddUser={handleAddUser}/>
      <hr />
      <UserList users={users} handleDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;