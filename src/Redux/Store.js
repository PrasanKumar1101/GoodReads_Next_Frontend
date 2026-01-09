import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/Redux/Slices/authSlice";
import bookSliceReducer from "@/Redux/Slices/bookSlice";
import shelfSliceReducer from "@/Redux/Slices/shelfSlice";
export default configureStore({
  reducer: {
    auth: authReducer,
    book: bookSliceReducer,
    shelf:shelfSliceReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
