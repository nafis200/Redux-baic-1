import { useState, useEffect } from "react";
import { ProgressSpinner } from "primereact/progressspinner";
import  TodoItem from "./TodoItem";
type UserData = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Todo: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [flag, setFlag] = useState<boolean>(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: UserData[] = await response.json();
        setUsers(data);
        setFlag(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setFlag(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <>
      {
        flag? <TodoItem users={users} setUsers={setUsers} /> : <div className="">
        <ProgressSpinner
          className="w-10 flex justify-center"
          strokeWidth="8"
          animationDuration=".5s"
        />
      </div>
      }
    </>
  );
};

export default Todo;
