import React from "react";
import { User as UserType} from "../types/type";
import User from "./User";

type Props = {
  users: UserType[];
  handleDeleteUser: (id: string) => void; //沒有return 任何的type
};

const UserList = ({ users, handleDeleteUser }: Props) => {
  return (
    <div className="cards">
      {users.map((user) => (
        <User key={user.id} user={user} handleDeleteUser={handleDeleteUser} />
      ))}
    </div>
  );
};

export default UserList;
