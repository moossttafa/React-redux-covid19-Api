import axios from "axios";
import { Types } from "../Constants/Types"

export const fetchCovid = () => async (dispatch) => {
 try{
   const response = await axios.get('https://coronavirus-19-api.herokuapp.com/all')
   console.log("response",response.data);
   dispatch({
     type : Types.FETCH_COVID,
     payload : response.data
   });
 }catch(err){
  console.log("error",err);
 } 
};