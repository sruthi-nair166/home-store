import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  column1: null,
  column2: null,
  column3: null,
  column4: null,
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    setColumn1: (state, action) => {
      state.column1 = action.payload;
    },
    setColumn2: (state, action) => {
      state.column2 = action.payload;
    },
    setColumn3: (state, action) => {
      state.column3 = action.payload;
    },
    setColumn4: (state, action) => {
      state.column4 = action.payload;
    },
  },
});

export const { setColumn1, setColumn2, setColumn3, setColumn4 } =
  compareSlice.actions;

export default compareSlice.reducer;
