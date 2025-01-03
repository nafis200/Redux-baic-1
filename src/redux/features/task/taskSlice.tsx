import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';

interface initialState {
  tasks: ITask[];
  filter: "all";
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
  filter: "all",
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {

      const id = uuidv4();;

      const taskData = {
         ...action.payload,
         id,
         isCompleted: false,
      }

       state.tasks.push(taskData)
    },
  },
});

export const selectTasks = (state: RootState) => {
  return state.todo.tasks;
};

export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};

export const {addTask} = taskSlice.actions

export default taskSlice.reducer;
