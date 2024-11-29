import { useRef, useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

import { FormEvent } from "react";

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Props {
  users: Data[];
  data: Data;
  setUsers: React.Dispatch<React.SetStateAction<Data[]>>;
}

const Singleitem: React.FC<Props> = ({ users, data, setUsers }) => {
  const { userId, id, title, body } = data;
  const toast = useRef<Toast>(null);
  const [visible, setVisible] = useState<boolean>(false);

  // Delete Data function
  const deleteData = (data: Data): void => {
    setUsers(users.filter((user) => user.id !== data.id));
    toast.current?.show({
      severity: "warn",
      summary: "Delete",
      detail: "Data Deleted",
    });
  };

  const UpdateData = (): void => {
    setVisible(true);
  };

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    
  };

  const items: MenuItem[] = [
    {
      label: "Update",
      icon: "pi pi-refresh",
      command: () => {
        UpdateData();
      },
    },
    {
      label: "Delete",
      icon: "pi pi-times",
      command: () => {
        deleteData(data);
      },
    },
  ];

  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          userId: {userId}
          <div className="badge badge-secondary">Id: {id}</div>
        </h2>
        <p>
          <span className="font-bold">Title:</span> {title}
        </p>
        <p>
          <span className="font-bold">Description:</span> {body}
        </p>
        <div className="card-actions justify-end">
          <Toast ref={toast}></Toast>
          <SplitButton
            className="bg-blue-500 p-2 rounded-xl text-white"
            label="Change"
            model={items}
          />
        </div>
      </div>

      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <h2>Update Data</h2>
        <form onSubmit={handleLogin}  className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold md:text-xl">Title</span>
            </label>
            <input
              type="text"
              name="email"
              placeholder="Title"
              className="input input-bordered w-full"
             
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold md:text-xl ">Description</span>
            </label>
            <div className="relative">
              <input
                name="password"
                placeholder="Description"
                className="input input-bordered w-full"
                
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn bg-green-400 hover:bg-orange-500 w-full"
          >
            Login
          </button>
        </form>
      </Sidebar>
    </div>
  );
};

export default Singleitem;