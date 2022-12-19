import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPokeData } from "./features/PokeData/pokeDataSlice";
import { Counter } from "./features/counter/Counter";

export default function App() {
  const dispatch = useDispatch();
  const pokeData = useSelector((state) => state.pokeData.data);

  const getData = () => {
    fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
      .then((res) => res.json())
      .then((json) => {
        dispatch(setPokeData(json.results));
      })
      .catch((err) => {
        console.log("Error retrieving data: ", err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pokeData);

  return (
    <div>
      <div>
        <Counter />
      </div>
    </div>
  );
}
