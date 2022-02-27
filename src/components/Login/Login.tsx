import React from 'react';
import LoginCss from './Login.module.css'
import logoFlapping from '../../flapping-sin-fondo.png'
import fondo from '../../fondo.jpeg'
import {TextField} from "@mui/material";

const Login = () => {
    return (
        <div className={LoginCss.main}>
            <img className={LoginCss.imgFondo} src={fondo} alt={fondo}/>


            <div className={LoginCss.content}>

                <div className={LoginCss.contentHeader}>
                    <h1>Flapping</h1>
                    <div className={LoginCss.dividerTop}/>
                </div>

                <div className={LoginCss.contentMain}>

                    <div className={LoginCss.contentImgText}>
                        <img src={logoFlapping} alt="logo" className={LoginCss.logo}/>
                        <h2 className={LoginCss.text}>
                            El aleteo de una mariposa en una parte del mundo puede provocar un tsunami en el otro
                            extremo. (pensar que agregar acá)
                        </h2>
                    </div>
                    <div className={LoginCss.inputs}>
                        <div className={LoginCss.loginHeader}>
                            <h2 className={LoginCss.loginTitle}>Login</h2>
                            <div className={LoginCss.dividerLogin}/>

                        </div>

                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                            className={LoginCss.textField}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="Hello World"
                            className={LoginCss.textField}
                        />
                    </div>
                </div>
                <div className={LoginCss.footer}>
                    <div className={LoginCss.dividerBot}/>
                    <p className={LoginCss.textFooter}>© Flapping Company, 2022. </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
