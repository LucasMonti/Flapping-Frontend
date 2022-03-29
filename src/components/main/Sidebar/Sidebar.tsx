import React from 'react';
import sidebarCss from './Sidebar.module.css'

const Sidebar = () => {


    return (
        <div className={sidebarCss.sidebar}>
            <button className={`btn ${sidebarCss.button} shadow-none`}>
                <i className={`bi bi-house-fill ${sidebarCss.icon}`}> </i>
                <p>Home</p>
            </button>
            <button className={`btn ${sidebarCss.button} shadow-none`}>
                <i className={`bi bi-cup-fill ${sidebarCss.icon}`}> </i>
                <p>Colaborations</p>
            </button>
            <button className={`btn ${sidebarCss.button} shadow-none`}>
                <i className={`bi bi-dice-6-fill ${sidebarCss.icon}`}> </i>
                <p>Proyects</p>
            </button>
            <button className={`btn ${sidebarCss.button} shadow-none`}>
                <i className={`bi bi-info-circle-fill ${sidebarCss.icon}`}> </i>
                <p>Information</p>
            </button>
        </div>
    );
};

export default Sidebar;
