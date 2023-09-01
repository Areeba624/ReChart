import React from "react";
import Chart from "./TimeSeries";
import PyramidChart from "./PyramidGraph"
import { StackedGraph } from "./StackedGraph";
import Scatter from "./ScatterGraph";
import Vertical from "./VerticalArrow";
// import CustomBarChart from "./VeticleArrow";
// // import VerticalBarGraphWithArrows from "./VeticleArrow";
// import PopulationPyramid from "./PyramidGraph";


const App = () => {
  return (
    <div>
      <Chart />
      <h1>Population Pyramid</h1>
      <PyramidChart/>
      {/* <PopulationPyramid /> */}
      <StackedGraph />
      <Scatter></Scatter>
       <Vertical/>
    </div>
  );
};

export default App;
