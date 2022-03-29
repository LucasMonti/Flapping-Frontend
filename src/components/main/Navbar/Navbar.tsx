import React from 'react';
import navbarCss from './Navbar.module.css'
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    const navLogout = () => {
        return navigate('/logout')
    }

    const logout = () => {
        localStorage.removeItem('token');
        navLogout()
    }
    return (
        <div className={navbarCss.navbar}>
            <button type="button" className={`${navbarCss.menu} btn btn-lg shadow-none`}
                   ><i className="bi bi-list"> </i>
            </button>
            <h1 className={navbarCss.mainTitle}>Flapping</h1>
            <button type="button" className={`${navbarCss.profileButton} btn btn-lg shadow-none`}
                    ><i className="bi bi-person-circle"> </i>
            </button>
            <button type="button" className={`${navbarCss.backButton} btn btn-lg shadow-none`}
                    onClick={logout}><i className={`bi bi-box-arrow-right`}> </i>
            </button>

        </div>
    );
};

export default Navbar;
