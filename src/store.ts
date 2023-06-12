import { configureStore } from "@reduxjs/toolkit";
import { chatReducer, formReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    chat: chatReducer,
    form: formReducer,
  },
});
