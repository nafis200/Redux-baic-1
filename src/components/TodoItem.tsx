import React, { useState } from "react";
import Swal from "sweetalert2";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  users: Data[];
  setUsers: React.Dispatch<React.SetStateAction<Data[]>>;
}

const TodoItem: React.FC<Props> = ({ users, setUsers }) => {
  const [search, setSearch] = useState<string>("");

  const SearchItem = (): void => {
    const filteredData: Data[] = users.filter((data) =>
      data.title.toLowerCase().includes(search.toLowerCase())
    );

    if (filteredData.length === 0) {
      Swal.fire({
        title: "Sorry",
        text: "No data found with this title",
        icon: "error",
      });
      return;
    }

    setUsers(filteredData);
    setSearch("");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center mt-10">
        <input
          type="text"
          placeholder="Search by title"
          className="input input-bordered input-info w-full max-w-xs rounded-3xl"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={SearchItem}
          className="btn btn-active btn-primary ml-2 rounded-2xl"
        >
          Search
        </button>
      </div>
      <h1>{users.length}</h1>
    </div>
  );
};

export default TodoItem;
