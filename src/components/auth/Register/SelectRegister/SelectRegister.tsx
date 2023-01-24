// import React, {useState} from 'react';
import RegisterCss from "./SelectRegister.module.css";
// import logoFlapping from "../../../../flapping-sin-fondo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRegister } from "../../../../App/features/auth/authSlice";
import { useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
// import {postRegister} from "../../../../services/auth";

const SelectRegister = () => {

 
    const {setAuth} = useContext(AuthContext)
 
    const setSelectRegister = () => {
      console.log('estoy tocando el select register')
    setAuth('login')
    };

    const registerUser = () => {
      setAuth('register-user')
    }

    const registerCompany = () => {
      setAuth('register-company')
    }

  return (
    <div className={RegisterCss.divButtons}>
      <button
        type="button"
        className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
        onClick={ registerUser}
      >
        User
      </button>
      <button
        type="button"
        className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
        onClick={registerCompany}
      >
        Company
      </button>
      <div className={RegisterCss.divRegister}>
        <p>
          I have a Flapping account.{" "}
          <a className={RegisterCss.registerWord} onClick={setSelectRegister}>
           Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SelectRegister;
