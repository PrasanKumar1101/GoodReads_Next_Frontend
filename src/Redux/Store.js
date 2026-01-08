import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/Redux/Slices/authSlice";
import bookSliceReducer from "@/Redux/Slices/bookSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    book: bookSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
