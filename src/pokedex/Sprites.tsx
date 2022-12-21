import { useSelector } from "react-redux";
import { RootState } from "../store";
import { view } from "../types";
import { useState } from "react";

interface Props {
  pokeName: string;
}
const Sprites = ({ pokeName }: Props) => {
  const sprites = useSelector((state: RootState) => state.pokeData.sprites);

  const [view, setView] = useState<view>(
    sprites.front_default !== null ? "front_default" : "front_female"
  );

  const handleViewChange = (newView: view) => {
    setView(newView);
  };

  return (
    <div className="sprites-parent">
      <div className="sprites-content">
        {pokeName ? (
          <img className="sprite-image" src={sprites[view]} alt={view} />
        ) : null}
      </div>
      <div className="menu">
        {sprites.front_default !== null ? (
          <div>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("front_default")}
              >
                Front
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("front_shiny")}
              >
                Front Shiny
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("back_default")}
              >
                Back
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("back_shiny")}
              >
                Back Shiny
              </button>
            </span>
          </div>
        ) : (
          <div>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("front_female")}
              >
                Front
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("front_shiny_female")}
              >
                Front Shiny
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("back_female")}
              >
                Back
              </button>
            </span>
            <span className="menu-item">
              <button
                className="menu-button"
                onClick={() => handleViewChange("back_shiny_female")}
              >
                Back Shiny
              </button>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sprites;
