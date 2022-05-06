import { Types } from "../Constants/Types";

const initialState = {
  covide : {},
  covidEgypt : {},
}

export const CovidReducer = (state = initialState , action) => {
  switch (action.type) {
    case Types.FETCH_COVID: 
    return{ ...state, 
      covide: action.payload 
    }; 
    case Types.FETCH_COVID_EGYPT: 
    return{ ...state, 
      covidEgypt: action.payload 
    };
    default:
      return state; 
    } 
}