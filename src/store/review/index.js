import { createSlice } from "@reduxjs/toolkit";
import { Statuses } from "../../constants/statuses";

const initialState = {
  entities: {},
  ids: [],
  status: Statuses.idle,
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    startLoading: (state, action) => {
      console.log("пошла загрузка...");
      state.status = Statuses.inProgress;
      console.log(state.status);
    },
    successLoading: (state, action) => {
      state.status = Statuses.success;
      state.entities = { ...state.entities, ...action.payload.entities };
      state.ids = Array.from(new Set([...state.ids, ...action.payload.ids]));
      console.log("загрузка успешна");
    },
    failLoading: (state, action) => {
      state.status = Statuses.failed;
    },
  },
});
