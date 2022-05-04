import { Types } from "../Constants/Types";

const initialState = {
  covide : {},
}

export const CovidReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.FETCH_COVID: 
    return{ ...state, 
      covide: action.payload 
    };
    default:
      return state;
  }
}