import { configureStore } from "@reduxjs/toolkit";
import EcommSlice from "./EcommSlice";

export const store=configureStore ({

reducer:{
    EcommStore:EcommSlice,
},
});

