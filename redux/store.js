import { configureStore } from "@reduxjs/toolkit";
import UserRducer from "./user";

export default configureStore({
  reducer: {
    user: UserRducer
  }
});
