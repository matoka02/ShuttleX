import { configureStore } from "@reduxjs/toolkit";

import chatReducer from "./chatSlice";

const rootReducer = {
  chat: chatReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;