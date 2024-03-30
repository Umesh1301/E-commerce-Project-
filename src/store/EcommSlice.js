import { createSlice } from "@reduxjs/toolkit";
import ListOfItems from "../components/ListOfItems";

const initialState = {
  id: null,
  ListOfItems:ListOfItems,
};

export const EcommSlice = createSlice({
  name: "EcommStore",
  initialState,
  reducers: {
    increment(state) {
      console.log("first");
    },
  },
});

export const { increment } = EcommSlice.actions;

export default EcommSlice.reducer;
