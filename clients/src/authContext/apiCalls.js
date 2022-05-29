import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/v1/login", user);
    dispatch(loginSuccess(res.data));
    console.log("logged in")
  } catch (err) {
    dispatch(loginFailure());
    alert("invalid credtials")
    console.log(err)

  }
};