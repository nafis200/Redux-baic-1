
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/couterSlice';

export const store = configureStore({
     reducer: {
        counter: counterReducer
     },
})

export type RootState = ReturnType<typeof store.getState>;

// dispatch typeError

export type AppDispatch =  typeof store.dispatch



