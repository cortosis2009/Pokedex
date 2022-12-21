export type defaultState = {
  pokeData: {
    data: [];
    name: string;
    abilities: [];
    moves: [];
    sprites: [];
    types: [];
  };
};

export type ability = {
  ability: {
    name: string;
  };
};

export type move = {
  move: {
    name: string;
  };
};

export type type = {
  type: {
    name: string;
  };
};

export type sprite = {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: any;
  versions: any;
};

export type view =
  | "back_default"
  | "back_female"
  | "back_shiny"
  | "back_shiny_female"
  | "front_default"
  | "front_female"
  | "front_shiny"
  | "front_shiny_female";
