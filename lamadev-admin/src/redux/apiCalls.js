import { publicRequest } from "../tools/requestMethods";
import {loginSuccess, loginFailure, loginStart } from "./userRedux"

export const login = async (dispatch, user) => {
    dispatch(loginStart());
 
    try {
        const res = await publicRequest.post("/auth/login", user)       
        dispatch(loginSuccess(res.data));
    } catch (err) {
        console.log("PHAT ERROR");
        console.log(err);
        dispatch(loginFailure());
    }
}