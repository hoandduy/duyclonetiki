import { BOOL_CHANGE } from "./overLayTypes";

export const boolChange = payload => {
  return {
    type: BOOL_CHANGE,
    payload,
  };
};

