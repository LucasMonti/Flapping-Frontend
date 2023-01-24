import React, { useContext, useState } from "react";
import AuthPageCss from "./AuthPage.module.css";
import logoFlapping from "../../../flapping-sin-fondo.png";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../../services/auth";
import { useSelector } from "react-redux";
import Login from "../Login/Login";
import SelectRegister from "../Register/SelectRegister/SelectRegister";
import RegisterCompany from "../Register/RegisterCompany/RegisterCompany";
import RegisterUser from "../Register/RegisterUser/RegisterUser";
import { AuthContext } from "../../../context/AuthContext";

const AuthPage = () => {
  // const auth = useSelector((state: any) => state.auth);

  const {auth} = useContext(AuthContext)

  const authPageSelector = (auth: any) => {
    switch (auth) {
      case "login":
        return <Login />;
      case "select-register":
        return <SelectRegister />;
      case "register-company":
        return <RegisterCompany />;
      case "register-user":
        return <RegisterUser />;
      default:
        return <Login />;
    }
  };

  return (
    <div className={AuthPageCss.main}>
      <div className={AuthPageCss.mainDiv}>
        <div className={AuthPageCss.contentHeader}>
          <h1 className={AuthPageCss.mainTitle}>Flapping</h1>
          <div className={AuthPageCss.dividerTop} />
        </div>

        <div className={AuthPageCss.contentMain}>
          <div className={AuthPageCss.contentImgText}>
            <img src={logoFlapping} alt="logo" className={AuthPageCss.logo} />
            <h2 className={AuthPageCss.text}>
              A NEW WORLD CAN START WITH A SIMPLE{" "}
              <span className={AuthPageCss.flapping}>FLAPPING</span>.
            </h2>
          </div>
          <div className={AuthPageCss.divInputs}>
            <div className={AuthPageCss.authHeader}>
              <h2 className={AuthPageCss.authTitle}>{auth}</h2>
              <div className={AuthPageCss.dividerAuth} />
            </div>

            {authPageSelector(auth)}

          </div>
        </div>
        <div className={AuthPageCss.footer}>
          <div className={AuthPageCss.dividerBot} />
          <p className={AuthPageCss.textFooter}>© Flapping Company, 2022. </p>
        </div>
      </div>
    </div>
  );
};
export default AuthPage;
