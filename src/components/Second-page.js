import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


export default function Secondpage() {
    return (
        <Fragment>
            <div className="section-two">
                <div className="graph">
                    <div className="graph-title">Analysis</div>
                    <div className="graph-content"></div>
                </div>
                <div className="graph-info"></div>
               <Link to="third-page" className="recommendation"><div>20 recommendations</div></Link> 
               <Link to="/" className="products"><div >Products</div></Link>  
            </div>
        </Fragment>
    )
}
