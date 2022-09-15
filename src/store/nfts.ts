import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NftQuery, NftState } from "../types/nft-type";

const BASE_URL = "https://deep-index.moralis.io/api/v2";

let initialState: NftState = {
  nfts: [],
  myFavorites: [],
  error: "",
  currentIndex: 0,
};

export const getAllCollections: any = createAsyncThunk(
  "nfts/getAllCollections",
  async (_, { rejectWithValue }): Promise<{ response: NftQuery } | unknown> => {
    try {
      const config = {
        headers: {
          "x-api-key": `${process.env.REACT_APP_NFT_API}`,
        },
      };
      const response = await axios(
        `${BASE_URL}/0xf97664376416e9379f2354db444bfe3f00b6936b/nft?chain=eth&format=decimal`,
        config
      );

      for (const nft of response.data.result) {
        nft.logo = JSON.parse(nft.metadata)?.image;
        nft.name = JSON.parse(nft.metadata)?.name;
        nft.animation_url = JSON.parse(nft.metadata)?.animation_url;
        nft.description = JSON.parse(nft.metadata)?.description;
      }
      return {
        response: response.data.result,
      };
    } catch (error) {
      return rejectWithValue({ error: "The error" });
    }
  }
);

export const getCollectionsByQuery: any = createAsyncThunk(
  "nfts/search",
  async (
    query: string,
    { rejectWithValue }
  ): Promise<{ response: NftQuery } | unknown> => {
    try {
      const config = {
        headers: {
          "x-api-key": `${process.env.REACT_APP_NFT_API}`,
        },
      };
      if (query !== "") {
        const response = await axios(
          `${BASE_URL}/nft/search?chain=eth&format=decimal&q=${query}&filter=global`,
          config
        );

        for (const nft of response.data.result) {
          nft.logo = JSON.parse(nft.metadata)?.image;
          nft.name = JSON.parse(nft.metadata)?.name;
          nft.animation_url = JSON.parse(nft.metadata)?.animation_url;
          nft.description = JSON.parse(nft.metadata)?.description;
        }

        return {
          response: response.data.result,
        };
      }
    } catch (error) {
      return rejectWithValue({ error: "The error" });
    }
  }
);

const nftsSlice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    toggleFavorite: (state: NftState, action: PayloadAction<NftQuery>) => {
      const myFavorites = [...state.myFavorites];
      const index = myFavorites.findIndex(
        (favorite) => favorite.token_id === action.payload.token_id
      );
      if (index === -1) {
        state.myFavorites = [...myFavorites, action.payload];
      } else {
        myFavorites.splice(index, 1);
        state.myFavorites = [...myFavorites];
      }
    },
  },
  extraReducers: {
    [getAllCollections.fulfilled]: (
      state: NftState,
      action: PayloadAction<{ response: NftQuery[] }>
    ) => {
      state.error = "";
      state.nfts = action.payload.response;
      state.currentIndex = 0;
    },
    [getAllCollections.rejected]: (state: NftState, action: any) => {
      state.error = action.payload;
    },
    [getCollectionsByQuery.fulfilled]: (
      state: NftState,
      action: PayloadAction<{ response: NftQuery[] }>
    ) => {
      if (action.payload) {
        state.error = "";
        state.nfts = action.payload.response;
        state.currentIndex = 0;
      }
    },
    [getCollectionsByQuery.rejected]: (state: NftState, action: any) => {
      state.error = action.payload;
    },
  },
});
export const { toggleFavorite } = nftsSlice.actions;
export default nftsSlice.reducer;
