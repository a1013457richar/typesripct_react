import React, { useRef ,ReactNode, useState} from "react";
import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(2),
  age: z.number().min(0).max(100),
  email: z.string().email(),
});

type Props = {
  handleAddUser: (name: string, age: number, email: string) => void; //沒有return 任何的type
};

const AddUser = ({ handleAddUser }: Props) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<ReactNode>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current!.value; //確定有值
    const age = ageRef.current!.value;
    const email = emailRef.current!.value;
    const validateResult = userSchema.safeParse({
      name,
      age: +age,
      email,
    });

    if (validateResult.success) {
      handleAddUser(name, +age, email);
    } else {
      // console.log(validateResult.error.issues);
      // let errorMessage = "";
      const errorMessage=validateResult.error.issues.map((err) => {
        return(<div key={err.message}>
          {err.path[0]} : {err.message}
        </div>)
        
        // errorMessage += err.path[0] + " :" + err.message + "\n";
      });
      setError(errorMessage);
    }
  };
  return (
    <form className="addTodo" onSubmit={handleSubmit}>
      <input type="text" placeholder="name" ref={nameRef} />
      <input type="number" placeholder="age" ref={ageRef} />
      <input type="email" placeholder="email" ref={emailRef} />
      <button type="submit">Add User</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default AddUser;
