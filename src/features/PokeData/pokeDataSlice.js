import { createSlice } from "@reduxjs/toolkit";

export const pokeDataSlice = createSlice({
  name: "pokedata",
  initialState: {
    data: [],
  },
  reducers: {
    setPokeData: (state, newData) => {
      state.data = newData.payload;
    },
  },
});

export const { setPokeData } = pokeDataSlice.actions;

export default pokeDataSlice.reducer;
