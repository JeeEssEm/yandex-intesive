import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

// const removeProp = (key, state) => {
//   return Object.keys(state)
//     .filter((prop) => prop != key)
//     .reduce((initObj, objKey) => {
//       initObj[objKey] = state[objKey];
//       return initObj;
//     }, {});
// };

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addBook: (state, action) => {
      state[action.payload] = (state[action.payload] || 0) + 1;
    },
    removeBook: (state, action) => {
      if (state[action.payload] === 1) {
        state[action.payload] = 0;
      } else {
        state[action.payload] = state[action.payload] - 1;
      }
    },
  },
});
