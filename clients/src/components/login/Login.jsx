
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";
import logo_for from '.././logo_for.png'


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src={logo_for}
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            Hey, havent you registered! <b> <a href="/register">Sign up now.</a> </b>
          </span>
          
        </form>
      </div>
    </div>
  );
}