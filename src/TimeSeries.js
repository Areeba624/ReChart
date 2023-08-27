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
} from "recharts";

const data = [
  { name: "2019", value: 100 },
  { name: "2020", value: 204 },
  { name: "2021", value: 159 },
  { name: "2022", value: 309 },
  { name: "2023", value: 255 },
];



class Chart extends React.Component {
  render() {
    // console.log(Info , "testing")
    return (
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Monthly Data
          </Typography>
          <LineChart width={400} height={300} data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </CardContent>
      </Card>
    );
  }
}

export default Chart;
