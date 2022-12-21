import { useSelector } from "react-redux";
import { RootState } from "../store";
import { formatLabel } from "../utils";

interface Props {
  pokeName: string;
}

const Moves = ({ pokeName }: Props) => {
  const moves = useSelector((state: RootState) => state.pokeData.moves);

  return (
    <div>
      <div className="title">Top 5 Moves</div>
      {pokeName
        ? moves.slice(0, 5).map((item) => {
            return (
              <div key={item.move.name}>{formatLabel(item.move.name)}</div>
            );
          })
        : null}
    </div>
  );
};

export default Moves;
