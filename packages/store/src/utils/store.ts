import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./accountSlice";

const appStore = configureStore({ reducer: { account: accountReducer } });

export default appStore;
