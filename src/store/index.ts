import  { configureStore } from '@reduxjs/toolkit';
import nftsSlice  from "./nfts";

export const store = configureStore({
  reducer: {
    nfts: nftsSlice,
  }
});