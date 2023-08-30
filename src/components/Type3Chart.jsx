import React from 'react'
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis ,ResponsiveContainer} from 'recharts';

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
const Type3Chart = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
    <BarChart
    barSize={50}
    barCategoryGap={2}
    data={Type3}
    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
  >
    <CartesianGrid vertical={false} />
    <XAxis dataKey="Year" dx={20} dy={10} tickLine={false} axisLine={false} />
    <YAxis 
      dx={-10}
      tickLine={false}
      axisLine={false}
      tickFormatter={(tick) => {
        return `${tick}%`;
      }}
    />
    <Legend />
    <Bar dataKey="CityLake" fill="#C70039" unit="%" />
    <Bar dataKey="US" fill="#808080" />
  </BarChart>
  </ResponsiveContainer>
  )
}

export default Type3Chart