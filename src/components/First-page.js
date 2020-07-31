import React, { Fragment, Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import Hamburger from './Hamburger'


class Firstpage extends Component {

    constructor (props){
        super(props);

        this.state = {
            jay: []
        }
    }

    
    componentDidMount(){
        fetch('https://www.dunfred.com/api/app/recommendations/')
        .then(response => response.json())
        .then(data => this.setState({ jay : data }))
    
    }

    render(){
       
        const getInfo = (e) => {
            let infoValue = document.getElementById('input').value
            if (infoValue === '' || infoValue === null) {
                console.log('Please input something');
            }
            else{
                // console.log('welcome');
                this.props.history.push('second-page')
            }
        }
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
                    <input type="text" placeholder="Input product" id="input" /> 
                    <Link to="" onClick={getInfo}>Analyse</Link>   
                  
                </div>
        </Fragment>
    )
    }
}

export default withRouter(Firstpage);