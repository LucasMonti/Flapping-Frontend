import React, {useEffect, useState} from 'react';
import challengesCss from './Challenges.module.css'
import sidebarCss from "../../main/Sidebar/Sidebar.module.css";
import {getChallenges} from "../../../services/challenges";

const Challenges = () => {
    const [challenges, setChallenges] = useState([]);

    useEffect(  () => {
            // getChallenges().then(res => {
            //     console.log(res.data.data.challenges)
            //     setChallenges(res.data.data.challenges)
            // })
            //     return () => {
            //     setChallenges([])
            //     }
    }, []);



    return (
        <div className={challengesCss.container}>
            <div className={challengesCss.filterContainer}>
                <h2 className={challengesCss.title}>Filters</h2>
                <div className={challengesCss.divFilters}>
                    <select className={`${challengesCss.select} shadow-none form-select`}
                            aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${challengesCss.select} shadow-none form-select`}
                            aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${challengesCss.select} shadow-none form-select`}
                            aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className={`${challengesCss.select} shadow-none form-select`}
                            aria-label="Default select example">
                        {/*<option selected>Open this select menu</option>*/}
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className={challengesCss.divButtons}>
                    <button type="button"
                            className={`btn btn-outline shadow-none m-1 ${challengesCss.button}`}>Cancel
                    </button>
                    <button type="button"
                            className={`btn btn-outline shadow-none m-1 ${challengesCss.button}`}
                    >Filter
                    </button>
                </div>
            </div>
            <hr/>
            <div className={challengesCss.toolsContainer}>
                <button className={`btn shadow-none`}>
                    <i className={`bi bi-eye-fill ${challengesCss.icon}`}> </i>
                </button>
                <button className={`btn shadow-none`}>
                    <i className={`bi bi-plus-square-fill ${sidebarCss.icon}`}> </i>
                </button>
                <button className={`btn shadow-none`}>
                    <i className={`bi bi-pen-fill ${challengesCss.icon}`}> </i>
                </button>
                <button className={`btn shadow-none`}>
                    <i className={`bi bi-trash2-fill ${challengesCss.icon}`}> </i>
                </button>
            </div>
            <hr/>
            <div className={challengesCss.tableContainer}>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry the Bird</td>
                        <td>Thornton</td>
                        <td>@twitter</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Challenges;
