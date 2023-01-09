import React, {useState} from 'react';
import LoginCss from './Login.module.css'
import logoFlapping from '../../../flapping-sin-fondo.png'
import {useNavigate} from "react-router-dom";
// import AuthServices from "../../../services/auth";
import {postLogin} from '../../../services/auth'

const Login = () => {


    const navigate = useNavigate()

    const navRegister = () => {
        return navigate('/register')
    }

    const navHome = () => {
        return navigate('/homeState')
    }

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {

        const loginData = {
            email,
            password
        }

        try {
            const loginResponse = await postLogin(loginData)
            loginResponse && localStorage.setItem('token', loginResponse.data.data.token);
            navHome()
        } catch (e: any) {
            console.log(e.response.data.message)
        }
}

return (
    <div className={LoginCss.main}>

        <div className={LoginCss.mainDiv}>

            <div className={LoginCss.contentHeader}>
                <h1 className={LoginCss.mainTitle}>Flapping</h1>
                <div className={LoginCss.dividerTop}/>
            </div>

            <div className={LoginCss.contentMain}>

                <div className={LoginCss.contentImgText}>
                    <img src={logoFlapping} alt="logo" className={LoginCss.logo}/>
                    <h2 className={LoginCss.text}>
                        A NEW WORLD CAN START WITH A SIMPLE <span className={LoginCss.flapping}>FLAPPING</span>.
                    </h2>
                </div>
                <div className={LoginCss.divInputs}>
                    <div className={LoginCss.loginHeader}>
                        <h2 className={LoginCss.loginTitle}>Login</h2>
                        <div className={LoginCss.dividerLogin}/>

                    </div>

                    <div className={`form-floating ${LoginCss.divInput}`}>
                        <input type="email"
                               className={`form-control ${LoginCss.input}`}
                               placeholder="email@email.com"
                               aria-label="email"
                               id="email"
                               value={email}
                               onChange={event => setEmail(event.target.value)}
                        />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className={`form-floating ${LoginCss.divInput}`}>
                        <input type="password"
                               className={`form-control ${LoginCss.input}`}
                               placeholder="Password"
                               aria-label="password"
                               id="password"
                               value={password}
                               onChange={event => setPassword(event.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className={LoginCss.divButtons}>
                        <button type="button"
                                className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}>Cancel
                        </button>
                        <button type="button"
                                className={`btn btn-outline shadow-none w-25 m-1 ${LoginCss.button}`}
                                onClick={login}>Login
                        </button>
                    </div>
                    <div className={LoginCss.divRegister}>
                        <p>Don't have a Flapping account? <a className={LoginCss.registerWord}
                                                             onClick={navRegister}>Register</a></p>
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
}
export default Login;
