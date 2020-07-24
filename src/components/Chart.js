import React, { Component } from 'react'
import {Line, Doughnut} from 'react-chartjs-2'

 
class Chart extends Component {
    constructor (props){
        super(props)
        this.state = {
            dataChart:{
                labels: ['fdfs', 'dfsd', 'fdsf', 'fsd', 'dfsd'],
                datasets:[
                    {
                        label: ' sfdsfsdfsd',
                        data:[
                           21,
                           12,
                           565,
                           632,
                           123,
                        ],
                        lineTension: 0.1,
                        pointBackgroundColor: '#ff6029',
                        pointBorderColor: '#ff6029',
                        borderColor: '#0091d1'
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Line 
                    data = {this.state.dataChart}
                    height = {200}
                    options = {{
                        
                    }
                    }
                
                />
            </div>
        )
    }
}
class Second extends Component {
    constructor (props){
        super(props)
        this.state = {
            dataChart:{
                labels: ['Male', 'Female'],
                datasets:[
                    {
                        label: ' sfdsfsdfsd',
                        data:[
                           565,
                           632,
                        ],
                        backgroundColor: [
                            '#ff6029',
                            '#0091d1'
                        ]
                        
                    }
                ]
            }
        }
    }
    render() {
        return (
            <div className="chart">
                <Doughnut
                    data = {this.state.dataChart}
                    height = {100}
                    options = {{
                     legend:{
                         position: "right"
                     }   
                    }
                    }
                
                />
            </div>
        )
    }
}

export  {Chart, Second};
