import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "2011",
    uv: 2,
    pv: 2,
    amt: 2400
  },
  {
    name: "2012",
    uv: 11,
    pv: 7,
    amt: 2210
  },
  {
    name: "2013",
    uv: 17,
    pv: 15,
    amt: 2290
  },
  {
    name: "2014",
    uv: 25,
    pv: 20,
    amt: 2000
  },
  {
    name: "2015",
    uv: 30,
    pv: 23,
    amt: 2181
  },
  {
    name: "2016",
    uv: 35,
    pv: 27,
    amt: 2500
  },
  {
    name: "2017",
    uv: 40,
    pv: 30,
    amt: 2100
  }
];
const CustomizedLabel = (props) => {
  const { x, y, stroke, value, position } = props;
  const v = position === "up" ? y - 15 : y + 15;
  console.log(stroke, value, position, v);
  return (
    <text x={x} y={v} dy={-1} fill={stroke} fontSize={13} textAnchor="middle">
      {value}%
    </text>
  );
};
export default function PopulationChart() {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
    <LineChart  data={data}>
      <CartesianGrid vertical={false} />
      <XAxis dx={0} dy={10} tickLine={false} axisLine={false} dataKey="name" />
      <YAxis
        dx={-10}
        tickLine={false}
        axisLine={false}
        tickFormatter={(tick) => {
          return `${tick}%`;
        }}
      />
      <Line
        activeDot={false}
        dot={false}
        dataKey="pv"
        stroke="#1CCBD6"
        strokeWidth={3}
      >
        <LabelList
          content={<CustomizedLabel stroke="#1CCBD6" position="down" />}
        />
      </Line>
      <Line
        dot={false}
        activeDot={false}
        dataKey="uv"
        stroke="#EE0DE5"
        strokeWidth={3}
      >
        <LabelList
          content={<CustomizedLabel stroke="#EE0DE5" position="up" />}
        />
      </Line>
    </LineChart>
    </ResponsiveContainer>
  );
}
