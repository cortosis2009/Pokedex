import "./index.css";
import { Provider } from "react-redux";
import Store from "./store";
import Pokedex from "./pokedex/Pokedex";

export default function App() {
  return (
    <Provider store={Store}>
      <Pokedex></Pokedex>
    </Provider>
  );
}
