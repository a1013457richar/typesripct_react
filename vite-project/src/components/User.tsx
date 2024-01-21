import React from 'react'
import { User as UserType} from '../types/type'

type Props = {
  user: UserType;
  handleDeleteUser: (id: string) => void;
};

const User = ({ user, handleDeleteUser }: Props) => {
  return (
    
        <div key={user.id}>
          <p>ID:{user.id}</p>
          <p>Name:{user.name}</p>
          <p>Age:{user.age}</p>
          <p>Email{user.email}</p>
          <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
        </div>
  
  )
}

export default User