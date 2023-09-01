import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Brush,
  ComposedChart,
} from "recharts";
import PopulationChart from "./components/PopulationChart";
import Type3Chart from "./components/Type3Chart";
import Type4Chart from "./components/Type4Chart";
const type1 = [
  { year: "2019", value: 590, record: 600 },
  { year: "2020", value: 868, record: 967 },
  { year: "2021", value: 734, record: 1098 },
  { year: "2022", value: 1000, record: 1500 },
  { year: "2023", value: 700, record: 1108 },
];

// Data for Time Series Bar Start here
const type2 = [
  { Name: "2019", value: 100, address: "123Ab", record: 140 },
  { Name: "2020", value: 204, address: "123Ab", record: 440 },
  { Name: "2021", value: 159, address: "123Ab", record: 640 },
  { Name: "2022", value: 309, address: "123Ab", record: 740 },
  { Name: "2023", value: 255, address: "123Ab", record: 840 },
];
// Data for Time Series Bar Start here

// Data for Stacked Bar Start here

  
// Data for Stacked Bar End here

class Chart extends React.Component {
  render() {
    return (
      //Card tag is used for design

      // Type 1 grapgh Start here
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Type 1 : Population Rate
          </Typography>
          <h1>3.0%</h1>
          <ComposedChart
            width={500}
            height={300}
            data={type1}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="record"  fill="#999999" />
            <Line type="monotone" dataKey="value" stroke="#000000" />
          </ComposedChart>
          <br></br>
          {/* // Type 1 grapgh End here */}

          {/*   // Type 2 grapgh Start here */}
          <Typography variant="h5" gutterBottom>
            Type 2 : Unemployment Rate
          </Typography>
          <LineChart width={900} height={300} data={type2}>
            <XAxis dataKey="Name" />
            <YAxis />

            {/* StrokeDasharray prop "is used to create dashed grid lines". */}
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="value" stroke="#00FFFF" />
            <Line type="monotone" dataKey="record" stroke="#FF00FF" />
          </LineChart>
          <br></br>

          {/*  Type 3 : Time Series Graph*/}

          <Typography variant="h4" gutterBottom>
            Type 3 : Change in NonFarm Employment: 2012-2021
          </Typography>
          <Type3Chart/>

          {/* Type 4 Start from here */}

          <Typography variant="h4" gutterBottom>
            Type 4 : Utah Taxable Retail Sales
          </Typography>
              <Type4Chart/>
        </CardContent>
      </Card>
    );
  }
}

export default Chart;
