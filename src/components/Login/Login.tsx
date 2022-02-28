import React from 'react';
import LoginCss from './Login.module.css'
import logoFlapping from '../../flapping-sin-fondo.png'

const Login = () => {

    return (
        <div className={LoginCss.main}>
            {/*<img className={LoginCss.imgFondo} src={fondoClaro} alt={fondoClaro}/>*/}


            <div className={LoginCss.mainDiv}>

                <div className={LoginCss.contentHeader}>
                    <h1 className={LoginCss.mainTitle}>Flapping</h1>
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
                    <div className={LoginCss.divInputs}>
                        <div className={LoginCss.loginHeader}>
                            <h2 className={LoginCss.loginTitle}>Login</h2>
                            <div className={LoginCss.dividerLogin}/>

                        </div>

                        <div className={`form-floating ${LoginCss.divInput}`}>
                        <input type="email" className={`form-control ${LoginCss.input}`}  placeholder="email@email.com" aria-label="email"
                               id="email"/>
                        <label htmlFor="email">Email</label>
                        </div>

                        <div className={`form-floating ${LoginCss.divInput}`}>
                        <input type="text" className={`form-control ${LoginCss.input}`} placeholder="Password"
                               aria-label="Username"
                               aria-describedby="basic-addon1"/>
                            <label htmlFor="email">Password</label>
                        </div>

                        <div className={LoginCss.divButtons}>
                        <button type="button" className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}>Cancel</button>
                        <button type="button" className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}>Login</button>
                        </div>
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
