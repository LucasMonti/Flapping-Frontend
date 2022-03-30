import React from 'react';
import proyectsCss from './Proyects.module.css'

const Proyects = () => {
    return (
        <div className={proyectsCss.container}>
            <div className={proyectsCss.filterContainer}>
            <h2 className={proyectsCss.title}>Filters</h2>
                <div className={proyectsCss.divFilters}>
                    <select className={`${proyectsCss.select} shadow-none form-select`} aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${proyectsCss.select} shadow-none form-select`} aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${proyectsCss.select} shadow-none form-select`} aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${proyectsCss.select} shadow-none form-select`} aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className={proyectsCss.divButtons}>
                    <button type="button"
                            className={`btn btn-outline shadow-none m-1 ${proyectsCss.button}`}>Cancel
                    </button>
                    <button type="button"
                            className={`btn btn-outline shadow-none m-1 ${proyectsCss.button}`}
                            >Filter
                    </button>
                </div>
            </div>
            <hr/>
            <div className={proyectsCss.toolsContainer}>
                barra de tareas
            </div>
            <hr/>
            <div className={proyectsCss.tableContainer}>
                tabla
            </div>
        </div>
    );
};

export default Proyects;
