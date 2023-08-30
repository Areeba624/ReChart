import React from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  ResponsiveContainer,
  Customized,
  Cross,
} from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { x: 0.0, y: 10, z: "Finanical" },
  { x: 0.2, y: 20, z: "Information" },
  { x: 0.4, y: 30, z: "trade/Trans/UT" },
  { x: 0.5, y: 40, z: "Government" },
  { x: 0.6, y: 50, z: "Manufacturing" },
  { x: 0.8, y: -10, z: "Prof/Bus" },
  { x: 0.10, y: -20, z: "Construstion" },
  { x: 1.2, y: -30, z: "Ed/Health" },
  { x: 1.4, y: -40, z: "Other" },
  { x: 1.6, y: -50, z: "Res/Mining" },
];

const VerticalData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const CustomizedCross = (props) => {
  const { width, height, stroke, fill, formattedGraphicalItems } = props;
  console.log(props);
  // get first series in chart
  const firstSeries = formattedGraphicalItems[0];
  // get any point at any index in chart
  const secondPoint = firstSeries?.props?.points[1];

  // render custom content using points from the graph
  return (
    <Cross
      y={secondPoint?.y}
      x={secondPoint?.x}
      top={15}
      left={50}
      height={height}
      width={width}
      stroke={stroke ?? "#000"}
      fill={fill ?? "none"}
    />
  );
};

class Plot extends React.Component {
  render() {
    return (
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "15px",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Type 1 : Scatter Plot Chart
            </Typography>
            <ResponsiveContainer width={800} height={500}>
              <ScatterChart
                width={500}
                height={300}
                data={VerticalData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />

                <XAxis type="number" dataKey="x" name="" unit="%" />
                <YAxis type="number" dataKey="y" name="weight" unit="" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="A school" data={data} fill="#FF7F50">
                  <LabelList dataKey="z" fill="#900C3F" />
                </Scatter>
                <Customized component={CustomizedCross} />
              </ScatterChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    );
  }
}
export default Plot;
