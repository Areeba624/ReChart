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
const Type3 = [
  { year: "2012", US: 4, CityLake: 2 },
  { year: "2013", US: 3, CityLake: 2 },
  { year: "2014", US: 2, CityLake: 4 },
  { year: "2015", US: 2, CityLake: 6 },
  { year: "2016", US: 1, CityLake: 8 },
  { year: "2017", US: 2, CityLake: 10 },
  { year: "2018", US: 15, CityLake: 12 },
  { year: "2019", US: 23, CityLake: 14 },
  { year: "2020", US: 18, CityLake: 16 },
  { year: "2021", US: 19, CityLake: 18 },
];

const type4 = [
  { year: "Feb-20", value: 0.0 },
  { year: "Ap-20",  value: 2.0 },
  { year: "Jun-20", value: 3.0 },
  { year: "Aug-20", value: 4.7 },
  { year: "Oct-20", value: 5.9 },
  { year: "Dec-20", value: 6.3 },
  { year: "Feb-21", value: 7.9 },
  { year: "Apr-21", value: 9.0 },
  { year: "Jun-21", value: 3.8 },
  { year: "Aug-21", value: 2.6 },
  { year: "Oct-21", value: 2.4 },
  { year: "Dec-21", value: 5.9 },
  { year: "Feb-22", value: 4.3 },
  { year: "Apr-22", value: 3.8 },
  { year: "Jun-22", value: 8.0 },
  { year: "Aug-22", value: 6.7 },
  { year: "Oct-22", value: 5.8 },
  { year: "Dec-22", value: 3.0 },
];
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
            <Bar dataKey="record" barSize={20} fill="#999999" />
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
          <BarChart
            width={600}
            height={300}
            barSize={50}
            barCategoryGap={2}
            data={Type3}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="CityLake" fill="#C70039" unit="%" />
            <Bar dataKey="US" fill="#808080" />
          </BarChart>

          {/* Type 4 Start from here */}

          <Typography variant="h4" gutterBottom>
            Type 4 : Utah Taxable Retail Sales
          </Typography>
          <BarChart
            width={700}
            height={600}
            data={type4}
            syncId="anyId"
            margin={{
              top: 10,
              right: 230,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar type="monotone" dataKey="value" stroke="#82ca9d" fill="#000080" />
            <Brush
              dataKey="createdday"
              height={20}
              stroke="#8884d8"
              style={{ margin: "20px" }}
            />
          </BarChart>
        </CardContent>
      </Card>
    );
  }
}

export default Chart;
