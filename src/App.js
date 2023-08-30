import React from "react";
import Chart from "./TimeSeries";
import PopulationPyramid from "./PyramidGraph";
import { StackedGraph } from "./StackedGraph";
import Scatter from "./ScatterGraph";
import VerticleBar from "./VerticleBarChart";

const App = () => {
  return (
    <div>
      <Chart />
      <h1>Population Pyramid</h1>
      <PopulationPyramid />
      <StackedGraph />
      <Scatter></Scatter>
      <VerticleBar/>
    </div>
  );
};

export default App;
