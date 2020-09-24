import './App.css';
import React from 'react';
import PostList from './PostList'
import Radar from './Radar'
import Bar from './Bar'
import Bar1 from './Bar1'
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import './index.css';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import face from './face.png';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

function App() {
  return (
    <>
      <img src={face} alt="face" id="faceImage" />;
      <div class="basicInfo">
        <PostList />
        <h4>Email:  zoeychen@123.com</h4>
        <br />
      </div>
      <ul></ul>
      <Radar />
      {/*<Bar />*/}
      <Bar1 />

    </>

  )
}

export default App;
