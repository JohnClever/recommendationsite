import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import {Chart, Second} from './Chart'


export default class Secondpage extends Component {
    render() {
        return (
            <Fragment>
            <div className="section-two">
                <div className="graph">
                    <div className="graph-title">Analysis</div>
                    <div className="graph-content">
                    <Chart />
                    </div>
                </div>
                <div className="graph-info">
                <div className="graph2-content">
                    <Second />
                    </div>
                </div>
              <div  className="recommendation">20 recommendations</div>
               <Link to="third-page" className="products"><div >Products</div></Link>  
               
            </div>
        </Fragment>
        )
    }
}

