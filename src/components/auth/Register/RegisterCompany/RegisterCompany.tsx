import React, { useContext, useState } from "react";
import RegisterCss from "./RegisterCompany.module.css";
import logoFlapping from "../../../../flapping-sin-fondo.png";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { selectRegister } from "../../../../App/features/auth/authSlice";
import { registerCompany } from "../../../../services/auth";
import { AuthContext } from "../../../../context/AuthContext";

const Register = () => {

  const {setAuth} = useContext(AuthContext)
    const setLogin = () => {
        setAuth('login')
    }

    const setSelectRegister = () => {
      setAuth('select-register')
  };


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const registerData = {
      name,
      email,
      password,
    };
    try {
      const companyRegistered = await registerCompany(registerData);
      console.log(companyRegistered);
      
     companyRegistered && setLogin()
    } catch (e) {
      e && console.log("Hubo un error, por favor intente de nuevo"); //TODO: colocar toast con mensaje de éxito o error.
    }
  };

  return (
    <div className={RegisterCss.contentMain}>
      <div className={`form-floating ${RegisterCss.divInput}`}>
        <input
          type="text"
          className={`form-control ${RegisterCss.input}`}
          placeholder="name"
          aria-label="email"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="name">Name</label>
      </div>

      <div className={`form-floating ${RegisterCss.divInput}`}>
        <input
          type="email"
          className={`form-control ${RegisterCss.input}`}
          placeholder="email@email.com"
          aria-label="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="email">Email</label>
      </div>

      <div className={`form-floating ${RegisterCss.divInput}`}>
        <input
          type="password"
          className={`form-control ${RegisterCss.input}`}
          placeholder="Password"
          aria-label="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label htmlFor="password">Password</label>
      </div>

      <div className={RegisterCss.divButtons}>
        <button
          type="button"
          className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
          onClick={setSelectRegister}
        >
          Cancel
        </button>
        <button
          type="button"
          className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
          onClick={register}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
