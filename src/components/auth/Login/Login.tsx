import React, { useContext, useState } from "react";
import LoginCss from "./Login.module.css";
import logoFlapping from "../../../flapping-sin-fondo.png";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectRegister } from "../../../App/features/auth/authSlice";
import { AuthContext } from "../../../context/AuthContext";

const Login = () => {
 
  // const dispatch = useDispatch();

  const {setAuth} = useContext(AuthContext)

  const navigate = useNavigate();
  const setSelectRegister = () => {
    console.log('estoy tocando el select register')
  setAuth('select-register')
  };

  const navHome = () => {
    return navigate("/home-state");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const login = async () => {
    const loginData = {
      email,
      password,
    };
    console.log(loginData)
    try {
      const loginResponse = await postLogin(loginData);
      console.log(loginResponse);
      loginResponse &&
        localStorage.setItem("token", loginResponse.data.data.token);
      navHome();
    } catch (e: any) {
      console.log(e.response.data.message);
    }
  };

  return (

    <div className={LoginCss.contentMain}>
      <div className={`form-floating ${LoginCss.divInput}`}>
        <input
          type="email"
          className={`form-control ${LoginCss.input}`}
          placeholder="email@email.com"
          aria-label="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className={`form-floating ${LoginCss.divInput}`}>
        <input
          type="password"
          className={`form-control ${LoginCss.input}`}
          placeholder="Password"
          aria-label="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className={LoginCss.divButtons}>
        <button
          type="button"
          className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}
        >
          Cancel
        </button>
        <button
          type="button"
          className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}
          onClick={login}
        >
          Login
        </button>
      </div>
      <div className={LoginCss.divRegister}>
        <p>
          Don't have a Flapping account?{" "}
          <a className={LoginCss.registerWord} onClick={setSelectRegister}>
            Register
          </a>
        </p>
      </div>
    </div>

  );
};
export default Login;
