import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from "axios";

const BASE_URL = "https://deep-index.moralis.io/api/v2";

let initialState: any = {
  nfts: [],
  error: '',
  currentIndex: 0,
}

export const getAllCollections: any = createAsyncThunk(
  'nfts/getAllCollections',
  async (_, {rejectWithValue}) => {
    try {
      const config = {
        headers: {
          'x-api-key': `${process.env.REACT_APP_NFT_API}`,
        }
      };
      const response = await axios(
        `${BASE_URL}/0xf97664376416e9379f2354db444bfe3f00b6936b/nft?chain=eth&format=decimal`,
        config
      );

      for (const nft of response.data.result) {
        nft.logo = JSON.parse(nft.metadata)?.image;
      }
      return {
        response: response.data,
      };
    } catch (error) {
      return rejectWithValue({error: 'The error'});
    }
  }
)

const nftsSlice = createSlice({
  name: 'nfts',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllCollections.fulfilled]: (state: any, action: any) => {
      state.error = '';
      state.nfts = action.payload.response.result;
      state.currentIndex = 0;
    },
    [getAllCollections.rejected]: (state: any, action: any) => {
      state.error = action.payload;
    },
  }
});
export default nftsSlice.reducer;