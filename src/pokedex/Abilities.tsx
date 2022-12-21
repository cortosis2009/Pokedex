import { useSelector } from "react-redux";
import { RootState } from "../store";
import { formatLabel } from "../utils";

interface Props {
  pokeName: string;
}

const Abilities = ({ pokeName }: Props) => {
  const abilities = useSelector((state: RootState) => state.pokeData.abilities);

  return (
    <div>
      <div className="title">Abilities</div>
      {pokeName
        ? abilities.map((item) => {
            return (
              <div key={item.ability.name}>
                {formatLabel(item.ability.name)}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Abilities;
