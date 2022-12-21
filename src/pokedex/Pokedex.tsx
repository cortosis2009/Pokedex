import { useState } from "react";
import { setPokeData } from "../features/PokeData/pokeDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { defaultState } from "../types";
import Abilities from "./Abilities";
import Moves from "./Moves";
import Sprites from "./Sprites";
import Types from "./Types";
import SearchBar from "./SearchBar";

const Pokedex = () => {
  const [searchVal, setSearchVal] = useState("");
  const pokeName: unknown = useSelector<defaultState>(
    (state) => state.pokeData.name
  );
  let pokeString = "";
  if (typeof pokeName === "string") {
    pokeString = pokeName;
  }
  const dispatch = useDispatch();

  const getData = () => {
    //retrieves api data
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchVal.toLowerCase()}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPokeData(json));
      })
      .catch((err) => {
        console.log("Error retrieving data: ", err);
      });
  };

  const handleInputChange = (e: string) => {
    setSearchVal(e);
  };

  const searchData = () => {
    getData();
  };

  return (
    <div className="pokedex-parent">
      <div className="poke-title">{pokeString.toUpperCase()}</div>
      <div className="sprite-search">
        <Sprites pokeName={pokeString} />
        <div className="search-parent">
          <SearchBar
            searchInputChange={handleInputChange}
            searchVal={searchVal}
            searchData={searchData}
          />
        </div>
      </div>
      <div className="attributes">
        <Types pokeName={pokeString} />
        <Abilities pokeName={pokeString} />
        <Moves pokeName={pokeString} />
      </div>
    </div>
  );
};

export default Pokedex;
