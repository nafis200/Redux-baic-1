import { useRef, useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { MenuItem } from "primereact/menuitem";
import { Toast } from "primereact/toast";
import { Sidebar } from 'primereact/sidebar';

import "primereact/resources/themes/fluent-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

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
        <p>
          You can update the details of the selected data here.
        </p>
      </Sidebar>
    </div>
  );
};

export default Singleitem;
