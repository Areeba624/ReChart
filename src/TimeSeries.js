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
} from "recharts";

const data = [
  { Name: "2019", value: 100 },
  { Name: "2020", value: 204 },
  { Name: "2021", value: 159 },
  { Name: "2022", value: 309 },
  { Name: "2023", value: 255 },
];
const Info = [
  {
    year: "2012",
    US: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    year: "2013",
    US: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    year: "2014",
    US: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    year: "2015",
    US: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    year: "2016",
    US: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    year: "2017",
    US: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    year: "2018",
    US: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    year: "2019",
    US: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    year: "2020",
    US: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    year: "2021",
    US: 3490,
    pv: 4300,
    amt: 2100,
  },
];

class Chart extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Unemployment Rate
          </Typography>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="Name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
          <br></br>
          <Typography variant="h6" gutterBottom>
            Change in NonFarm Employment: 2012-2021
          </Typography>
          <BarChart width={400} height={300} data={Info}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="US" stackId="a" fill="#82ca9d" />
          </BarChart>
        </CardContent>
      </Card>
    );
  }
}

export default Chart;
