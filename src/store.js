import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import pokeDataReducer from "./features/PokeData/pokeDataSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    pokeData: pokeDataReducer,
  },
});
