import { toast } from "react-toastify";
import { fetchBookAction } from "../books/bookAction";
import { postBurrow, fetchBurrow, returnBurrow } from "../../helper/axios";
import { setBurrows } from "./burrowSlice";

export const addBurrowAction = (obj) => async (dispatch) =>{
    const {status, message} = await postBurrow(obj);

    toast[status](message)

    if(status === "success"){

    //fetch user burrow
    dispatch(fetchBookAction());
    }
}
export const fetchBurrowAction = () => async (dispatch) =>{
    const {status, burrowHistory} = await fetchBurrow();

    // toast[status](message)

    if(status === "success"){
    //fetch user burrow
    dispatch(setBurrows(burrowHistory));
    }
}

export const returnBurrowAction = (obj) => async (dispatch) => {
    const { status, message } = await returnBurrow(obj);
  
    toast[status](message);
  
    if (status === "success") {
      //fetch user burrow
  
      dispatch(fetchBurrowAction());
      dispatch(fetchBookAction());
    }
  };