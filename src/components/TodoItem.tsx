
import React from 'react';

interface Data{
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface Props {
    users:Data[],
    setUsers: React.Dispatch<React.SetStateAction<Data[]>>
}

const TodoItem:React.FC<Props> = ({users,setUsers}) => {
    return (
        <div>
           
        </div>
    );
};

export default TodoItem;