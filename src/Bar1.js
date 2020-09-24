import React, { Component } from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
//按需导入
import echarts from 'echarts/lib/echarts'
//导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'
import ReactEcharts from 'echarts-for-react'
//引入样式
//import '../common.less'

export default class BarA extends Component {
    getOption = ()=>{
        let option = {
            title: {
                text: 'Top Skills'
            },
            tooltip:{
                trigger: 'axis'
            },
            xAxis: {
                type: 'value'
            },
            yAxis: {
                data: ['Vue','React','Javascript','CSS','HTML']
            },
            series : [
                {
                    name:'Mark',
                    type:'bar',
                    barWidth: '35%',
                    data:[20, 45, 65, 90, 96] 
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <Card.Grid className="bar_a">
                <ReactEcharts option={this.getOption()}/>
            </Card.Grid>
        )
    }
}