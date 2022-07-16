import { publicRequest, userRequest } from "../tools/requestMethods";
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
} from "./productRedux";
import { loginSuccess, loginFailure, loginStart } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
    window.location.replace("/home");
  } catch (err) {
    console.log("PHAT ERROR");
    console.log(err);
    dispatch(loginFailure());
  }
};

export const getProducts = async (dispatch) => {
  dispatch(getProductStart());

  try {
    const res = await publicRequest.get(
      "/products?num=12&new=true&category=all"
    );
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    console.log("PHAT PRODUCTS ERROR");
    console.log(err);
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());

  try {
    // const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    console.log("PHAT PRODUCTS ERROR");
    console.log(err);
    dispatch(deleteProductFailure());
  }
};

export const updateSidNavState = (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
  }
};
