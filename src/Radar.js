import React, { Component } from 'react'
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import './index.css';
import PostData from './data/radarData'

const myData = JSON.stringify(PostData);
const data1 = myData[0]
const data2 = myData[1]
console.log(parseFloat(data1.Backend))
console.log(parseFloat(data2.Backend))

class Radar extends Component {
    render() {

        // const captions = {
        //     MachineLearing: 'MachineLearing',
        //     Frontend: 'Frontend',
        //     Backend: 'Backend',
        //     DevOps: 'DevOps',
        //     Database: 'Database',
        //     SoftSkill: 'SoftSkill'
        // }
        return (

            <div class="radar">
                <RadarChart
                    captions={{
                        // columns
                        Communication: 'Communication',
                        Teamwork: 'Teamwork',
                        Language: 'Language',
                        ProjectManagement: 'Project Management',
                        ProblemSolving: 'Problem Solving',
                        Perseverance: 'Perseverance'

                    }}
                    data={[
                        // data
                        {
                            data: {
                                Communication: .88,
                                Teamwork: .78,
                                // Backend: parseFloat(data1.Backend) / 100,
                                Language: .63,
                                ProjectManagement: .59,
                                ProblemSolving: .90,
                                Perseverance: .75
                            },
                            meta: { color: '#58FCEC' }
                        }
                        // {
                        //     data: {
                        //         Communication: .98,
                        //         Backend: .78,
                        //         Devop: .60,
                        //         Database: .84,
                        //         MachineLearing: .60,
                        //         SoftSkill: .86
                        //     },
                        //     meta: {
                        //         color: 'yellow'
                        //     }
                        // },
                    ]}

                    size={400}
                />
            </div>
        );


    }
}





export default Radar