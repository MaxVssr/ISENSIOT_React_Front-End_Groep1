import React, { Component } from 'react';
import {Chart as ChartJS, registerables, CategoryScale, LinearScale, RadialLinearScale} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import axios from 'axios'

ChartJS.register(
    registerables,
    CategoryScale,
    LinearScale,
    RadialLinearScale,
)

class RadarChart extends Component {

    state = {
        chartData: []
    }

    // var baseURL = "https://api.ambeedata.com"
    // var extraURL = "/latest/pollen/by-place?place=Amsterdam"
    // var apiKey = "b1b7b03937feae095f9093bd691d22e821a9fb1645de22c9b11cce805738c548"

    // const fetchData = async () => {
    //     await fetch(`${baseURL}${extraURL}`, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'x-api-key': `${apiKey}`,
    //             // 'Access-Control-Allow-Origin': '*'
    //         }
    //     }).then((response) => {
    //         response.json().then((json) => {
    //             console.log(json)
    //         })
    //     }).catch(error => {
    //         console.log(error)
    //     })
    // }

    fetchData = () => {
            const baseURL = "https://api.ambeedata.com"
            const extraURL = "/latest/pollen/by-place?place=Amsterdam"
            const apiKey = "b1b7b03937feae095f9093bd691d22e821a9fb1645de22c9b11cce805738c548"
            axios.get(baseURL + extraURL, {headers: {"x-api-key": 'b1b7b03937feae095f9093bd691d22e821a9fb1645de22c9b11cce805738c548', 'Content-Type': 'application/json'}}).then(response => {
                this.setState({chartData: response.data});
                console.log(response.data)
            })
        }
    


    componentDidMount = () => {
        this.fetchData();
    }

    render(){
        return(
            <div>
                <Radar
                    data={{
                        labels: [
                            'Eating',
                            'Drinking',
                            'Sleeping',
                            'Designing',
                            'Coding',
                            'Cycling',
                            'Running'
                        ],
                        datasets: 
                            {
                            label: 'My First Dataset',
                            data: [65, 59, 90, 81, 56, 55, 40],
                            fill: true,
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            borderColor: 'rgb(255, 99, 132)',
                            pointBackgroundColor: 'rgb(255, 99, 132)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgb(255, 99, 132)'
                        }
                        
                    }}
                    height={400}
                    options={{
                        legend: {
                            position: 'top'
                        },
                        title: {
                            display: true,
                            text: 'Chart.js Radar Chart'
                        },
                        scale: {
                            reverse: false,
                            gridLines: {
                            color: [
                                'black',
                                'red',
                                'orange',
                                'yellow',
                                'green',
                                'blue',
                                'indigo',
                                'violet'
                            ]
                            },
                            ticks: {
                            beginAtZero: true
                            }
                        }
                    }}
                />
            </div>
        )
    }
}

export default RadarChart;