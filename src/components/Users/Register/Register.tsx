import React, {useState} from 'react';
import RegisterCss from "../Register/Register.module.css";
import logoFlapping from "../../../flapping-sin-fondo.png";
import {useNavigate} from "react-router-dom";
import {postRegister} from "../../../services/auth";

const Register = () => {

    const navigate = useNavigate()
    const navLogin = () => {
        return navigate('/login')
    }

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [walletAddress, setWalletAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        const registerData = {
            name,
            lastname,
            wallet_address: walletAddress,
            email,
            password
        }
        try {
            const userRegistered = await postRegister(registerData)
            userRegistered && navLogin();
        } catch (e){
            e && console.log('Hubo un error, por favor intente de nuevo') //TODO: colocar toast con mensaje de éxito o error.
        }
    }

    return (
        <div className={RegisterCss.main}>

            <div className={RegisterCss.mainDiv}>

                <div className={RegisterCss.contentHeader}>
                    <div className={RegisterCss.divArrowTitle}>
                        <button type="button" className={` btn btn-lg shadow-none ${RegisterCss.buttonBack}`}
                                onClick={navLogin}><i className={`bi bi-arrow-left ${RegisterCss.iconButton}`}> </i>
                        </button>
                        <h1 className={RegisterCss.mainTitle}>Flapping</h1>
                    </div>
                    <div className={RegisterCss.dividerTop}/>
                </div>

                <div className={RegisterCss.contentMain}>

                    <div className={RegisterCss.contentImgText}>
                        <img src={logoFlapping} alt="logo" className={RegisterCss.logo}/>
                        <h2 className={RegisterCss.text}>
                            A NEW WORLD CAN START WITH A SIMPLE <span className={RegisterCss.flapping}>FLAPPING</span>.
                        </h2>
                    </div>
                    <div className={RegisterCss.divInputs}>
                        <div className={RegisterCss.loginHeader}>
                            <h2 className={RegisterCss.loginTitle}>Register</h2>
                            <div className={RegisterCss.dividerLogin}/>

                        </div>

                        <div className={`form-floating ${RegisterCss.divInput}`}>
                            <input type="text"
                                   className={`form-control ${RegisterCss.input}`}
                                   placeholder="name"
                                   aria-label="email"
                                   id="name"
                                   value={name}
                                   onChange={event => setName(event.target.value)}
                            />
                            <label htmlFor="name">Name</label>
                        </div>

                        <div className={`form-floating ${RegisterCss.divInput}`}>
                            <input type="text"
                                   className={`form-control ${RegisterCss.input}`}
                                   placeholder="lastname"
                                   aria-label="lastname"
                                   id="lastname"
                                   value={lastname}
                                   onChange={event => setLastName(event.target.value)}
                            />
                            <label htmlFor="email">Last Name</label>
                        </div>

                        <div className={`form-floating ${RegisterCss.divInput}`}>
                            <input type="walletAddress"
                                   className={`form-control ${RegisterCss.input}`}
                                   placeholder="Wallet Address"
                                   aria-label="walletAddress"
                                   id="walletAddress"
                                   value={walletAddress}
                                   onChange={event => setWalletAddress(event.target.value)}
                            />
                            <label htmlFor="walletAddress">Wallet Address</label>
                        </div>

                        <div className={`form-floating ${RegisterCss.divInput}`}>
                            <input type="email"
                                   className={`form-control ${RegisterCss.input}`}
                                   placeholder="email@email.com"
                                   aria-label="email"
                                   id="email"
                                   value={email}
                                   onChange={event => setEmail(event.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className={`form-floating ${RegisterCss.divInput}`}>
                            <input type="password"
                                   className={`form-control ${RegisterCss.input}`}
                                   placeholder="Password"
                                   aria-label="password"
                                   id="password"
                                   value={password}
                                   onChange={event => setPassword(event.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </div>

                        <div className={RegisterCss.divButtons}>
                            <button type="button"
                                    className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}>Cancel
                            </button>
                            <button type="button"
                                    className={`btn btn-outline shadow-none w-25 m-1 ${RegisterCss.button}`}
                                    onClick={register}
                            >Register
                            </button>
                        </div>
                    </div>
                </div>
                <div className={RegisterCss.footer}>
                    <div className={RegisterCss.dividerBot}/>
                    <p className={RegisterCss.textFooter}>© Flapping Company, 2022. </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
