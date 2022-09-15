import { configureStore } from "@reduxjs/toolkit";
import nftsSlice from "./nfts";

export const store = configureStore({
  reducer: {
    nfts: nftsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
