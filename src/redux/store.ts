
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/couterSlice';
import taskReducer from './features/task/taskSlice';


export const store = configureStore({
     reducer: {
        counter: counterReducer,
        todo:taskReducer
     }
})

export type RootState = ReturnType<typeof store.getState>;

// dispatch typeError

export type AppDispatch =  typeof store.dispatch



  