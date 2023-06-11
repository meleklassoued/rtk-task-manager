// src/features/taskManager/slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITaskState {
  tasks: string[];
}

const initialState: ITaskState = {
  tasks: [],
};

const taskSLice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task !== action.payload);
    },
    sortTasks: (state) => {
      state.tasks.sort();
    },
  },
});
