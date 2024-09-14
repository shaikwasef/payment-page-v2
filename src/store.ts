import { configureStore } from "@reduxjs/toolkit";
import reducer from "@/reducers/reducers";
import { thunk } from "redux-thunk";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: true,
});

export default store;
