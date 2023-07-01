import { toast } from "react-toastify";
import { loginUser } from "../../helper/axios"
import { setUser } from "./userSlice";

export const signInAdminAction =  (userObj) => async (dispatch) =>{
    const {status, message, user} = await loginUser(userObj);
    toast[status](message);

    user?._id && dispatch(setUser(user))
}