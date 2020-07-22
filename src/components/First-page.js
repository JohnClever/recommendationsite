import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import Hamburger from './Hamburger'

export default function Firstpage() {
    return (
        <Fragment>
            <div className="sidebar">
                <Hamburger />
                
            </div>
            <div className="sidebar_content">
                    <div className="sidebar_profile">
                        <div className="profile">
                            <img src="" alt="" />
                        </div>
                        <div className="info">
                            <div className="info_active">
                                <h3>Naruto Uzumaki</h3>
                                <div className="hello"></div>
                            </div>
                            <p>ID : 0013778</p>
                        </div>
                    </div>      
                    <select name="" id="">
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                        <option value="">Diapers</option>
                    </select>
                    <input type="" placeholder="Input product" id="input" /> 
                    <Link to="second-page">Analyse</Link>   
                   
                </div>
        </Fragment>
    )
}
