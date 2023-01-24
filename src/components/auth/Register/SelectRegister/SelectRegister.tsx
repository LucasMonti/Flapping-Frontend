// import React, {useState} from 'react';
import RegisterCss from "./SelectRegister.module.css";
// import logoFlapping from "../../../../flapping-sin-fondo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectRegister } from "../../../../App/features/auth/authSlice";
// import {postRegister} from "../../../../services/auth";

const SelectRegister = () => {

  const dispatch = useDispatch();

  const setComponent = (name:string, page: string) => {
    dispatch(
      selectRegister({ name, page })
    )
  };


  return (
    <div className={RegisterCss.divButtons}>
      <button
        type="button"
        className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
        onClick={()=> setComponent('Register as User','register-user')}
      >
        User
      </button>
      <button
        type="button"
        className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
        onClick={()=> setComponent('Register as Company','register-company')}
      >
        Company
      </button>
      <div className={RegisterCss.divRegister}>
        <p>
          I have a Flapping account.{" "}
          <a className={RegisterCss.registerWord} onClick={()=> setComponent('Login','login')}>
           Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SelectRegister;
