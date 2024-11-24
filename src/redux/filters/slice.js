import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
    number: "",
	},
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
      changeFilter: (state, action) => {
         state.filters.name = action.payload;
    },
    changeFilterByNum: (state, action) => {
      state.filters.number = action.payload;
    },
  },
});

export const { changeFilter, changeFilterByNum } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
