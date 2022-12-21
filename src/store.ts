import { configureStore } from "@reduxjs/toolkit";
import pokeDataReducer from "./features/PokeData/pokeDataSlice";
import Store from "./store";

export default configureStore({
  reducer: {
    pokeData: pokeDataReducer,
  },
});

export type RootState = ReturnType<typeof Store.getState>;
