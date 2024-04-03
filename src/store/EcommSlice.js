import { createSlice } from "@reduxjs/toolkit";
import ListOfItems from "../components/ListOfItems";

const initialState = {
  id: null,
  ListOfItems: ListOfItems,
  cart: [],
};

export const EcommSlice = createSlice({
  name: "EcommStore",
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      const itemDetail = action.payload;

      const existingItem = state.cart.find((item) => item.id === itemDetail.id);
      if (existingItem) {
        existingItem.Qty += 1;
        console.log("first");
      } else {
        state.cart.push(itemDetail);
      }
    },
    increaseCartQuantity: (state, action) => {
      const itemDetail = action.payload;

      const existingItem = state.cart.find((item) => item.id === itemDetail.id);
      if (existingItem) {
        existingItem.Qty += 1;
      }
    },

    decreaseCartQuantity: (state, action) => {
      const itemDetail = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === itemDetail.id
      );
      if (existingItemIndex !== -1) {
        if (state.cart[existingItemIndex].Qty > 1) {
          state.cart[existingItemIndex].Qty -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== itemDetail.id);
        }
      }
    },

    purchaseCart: (state) => {
      if (state.cart.length === 0) {
        alert("please Add something");
        
      } else {
        state.cart=[]

        alert("Thanks for purchase ");
      }
    },

    // cartBadgeHandler:(state, action)=>{
    //   const itemDetail = action.payload;
    //   const existingItemIndex = state.cart.findIndex(
    //     (item) => item.id === itemDetail.id);
    //   if()
      
    // }
  },
});

export const {
  addCartItem,
  increaseCartQuantity,
  decreaseCartQuantity,
  purchaseCart,
} = EcommSlice.actions;

export default EcommSlice.reducer;
