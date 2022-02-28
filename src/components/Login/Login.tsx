import React from 'react';
import LoginCss from './Login.module.css'
import logoFlapping from '../../flapping-sin-fondo.png'
import fondo from '../../fondo.jpeg'
import {styled, TextField} from "@mui/material";


const Login = () => {

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#F7BD56',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#F7BD56',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#353535',

            },
            '&:hover fieldset': {
                borderColor: '#F96105',

            },
            '&.Mui-focused fieldset': {
                borderColor: '#F7BD56',
            },
        },
        '& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input': {
            color: '#F7BD56'
        },
        '& .MuiInputBase-input-MuiOutlinedInput-input': {
        color:'#F7BD56'
    }

    });


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


                        <CssTextField
                            required
                            id="outlined-required"
                            label="email"
                            // className={LoginCss.textField}
                            classes={{root: LoginCss.textField}}

                        />
                        <CssTextField
                            required
                            id="outlined-required"
                            label="password"
                            variant={"outlined"}

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
