import { createSlice } from "@reduxjs/toolkit";
import { ability, move, type } from "../../types";

export const pokeDataSlice = createSlice({
  name: "pokedata",
  initialState: {
    data: [],
    name: "",
    abilities: new Array<ability>(),
    moves: new Array<move>(),
    sprites: {
      back_default: "",
      back_female: "",
      back_shiny: "",
      back_shiny_female: "",
      front_default: "",
      front_female: "",
      front_shiny: "",
      front_shiny_female: "",
      other: {},
      versions: {},
    },
    types: new Array<type>(),
  },
  reducers: {
    setPokeData: (state, newData) => {
      const pokemon = newData.payload;
      state.data = pokemon;
      state.name = pokemon.name;
      state.abilities = pokemon.abilities;
      state.moves = pokemon.moves;
      state.sprites = pokemon.sprites;
      state.types = pokemon.types;
    },
  },
});

export const { setPokeData } = pokeDataSlice.actions;

export default pokeDataSlice.reducer;
