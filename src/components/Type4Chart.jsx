import React from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    BarChart,
    Bar,
    Brush,
  } from "recharts";

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
const Type4Chart = () => {
  return (
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
    <XAxis dataKey="year" dx={20} dy={10} tickLine={false} axisLine={false} />
    <YAxis   dx={-10}
      tickLine={false}
      axisLine={false}
      tickFormatter={(tick) => {
        return `$${tick}`;
      }} />
    <Tooltip />
    <Bar type="monotone" dataKey="value" stroke="#82ca9d" fill="#000080" />
  </BarChart>
  )
}

export default Type4Chart