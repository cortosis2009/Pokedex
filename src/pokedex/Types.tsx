import { useSelector } from "react-redux";
import { RootState } from "../store";

interface Props {
  pokeName: string;
}
const Types = ({ pokeName }: Props) => {
  const types = useSelector((state: RootState) => state.pokeData.types);

  const formatAbility = (type: string) => {
    //removes hyphens, and coverts to title case
    return type
      .replace("-", " ")
      .split(" ")
      .map((i) => i[0].toUpperCase() + i.substring(1).toLowerCase())
      .join(" ");
  };

  return (
    <div>
      <div className="title">Type</div>
      {pokeName
        ? types.map((item) => {
            return (
              <div key={item.type.name}>{formatAbility(item.type.name)}</div>
            );
          })
        : null}
    </div>
  );
};

export default Types;
