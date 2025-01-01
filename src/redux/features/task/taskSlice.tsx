import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface initialState {
    tasks: ITask[];
    filter:"all";
}

const initialState: initialState = {
  tasks: [
    {
      id: "sdhsahgs",
      title: "Initialize",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
    {
      id: "sdhsahgs",
      title: "Initialize",
      description: "Create home page and routing",
      dueDate: "2025-11",
      isCompleted: false,
      priority: "High",
    },
  ],
  filter:"all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export const selectTasks = (state: RootState)=>{
    return state.todo.tasks
}

export const selectFilter = (state:RootState)=>{
    return state.todo.filter
}

export default taskSlice.reducer;
