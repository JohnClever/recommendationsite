import React, { Component } from 'react'

class Recommendationcalls extends Component{
    constructor (){
        super();
        this.state = {
            jay: []
        }
    }
    componentDidMount() {
       
       const requestOptions = {
           method: 'POST',
           headers: {'Content-type': 'application/json'},
           body: JSON.stringify({title: 'Jay word'})
       };
     
        fetch('https://www.dunfred.com/api/app/recommendations/', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}

export default Recommendationcalls;