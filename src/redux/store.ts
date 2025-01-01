
import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './features/counter/couterSlice';
import logger from "./middlewares/logger";

export const store = configureStore({
     reducer: {
        counter: counterReducer
     },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>;

// dispatch typeError

export type AppDispatch =  typeof store.dispatch



