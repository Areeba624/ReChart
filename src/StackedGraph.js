import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  LabelList,CartesianGrid
} from "recharts";
import { Card, CardContent } from "@mui/material";

const renderCustomizedLabel = (props) => {
  const { content, ...rest } = props;

  return <Label {...rest} fontSize="12" fill="#FFFFFF" fontWeight="Bold" />;
};

export class StackedGraph extends React.Component {
  render() {
    const data = [
      { map: "Education/Health Service", Women: 68.6, Men: 31.4 },
      { map: "Leisure/Hospitality", Women: 51.9, Men: 48.1 },
      { map: "Other Service", Women: 50.7, Men: 49.4 },
      { map: "Finanical Activities", Women: 50.1, Men: 49.9 },
      { map: "Retail Trade", Women: 47.4, Men: 52.6 },
      { map: "Govermnent", Women: 39.8, Men: 60.29 },
      { map: "Information", Women: 39.0, Men: 61.0 },
      { map: "Professional / Business Service", Women: 38.0, Men: 62.0 },
      { map: "Whole Tarde", Women: 29.0, Men: 71.0 },
      { map: "Manufacturing", Women: 28.0, Men: 71.7 },
      { map: "transportation, Warehouse , Utilities", Women: 25.8, Men: 74.7 },
      { map: "Natural Resources", Women: 18.8, Men: 81.2 },
      { map: "Construction", Women: 9.2, Men: 90.8 },
    ];
    const data2 = [
      {
        value1: 200,
        value2: 300,
      },
      {
        value1: 120,
        value2: 250,
      },
      {
        value1: 100,
        value2: 200,
      },
    ];

    return (
      <Card>
        <CardContent>
          <div className="content c-white">
            <h1>Stacked Graph</h1>
            <ResponsiveContainer height={250} width={700}>
              <BarChart
                layout="vertical"
                width={800}
                height={900}
                data={data}
                barGap="25%"
                margin={{ left: 50, right: 50 }}
                stackOffset="expand"
              >
                <XAxis hide type="number" />
                <YAxis
                  type="category"
                  dataKey="map"
                  stroke="#FFFFFF"
                  fontSize="12"
                />
                <Tooltip />
                <Bar dataKey="Men" fill="#C70039" stackId="a">
                  <LabelList
                    dataKey="Men"
                    position="center"
                    content={renderCustomizedLabel}
                    unit="%"
                  />
                </Bar>
                <Bar dataKey="Women" fill="#808080" stackId="a">
                  <LabelList
                    dataKey="Women"
                    position="center"
                    content={renderCustomizedLabel}
                    unit="%"
                  />
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            {/* type 2 */}
            <h1>Diversity in Management & Jobs</h1>
            <ResponsiveContainer height={250} width={700}>
              <BarChart data={data2} layout="vertical">
                <CartesianGrid
                  vertical={true}
                  horizontal={false}
                  stroke="#D2E7FB"
                  fillOpacity={0}
                />
                <XAxis type="number" />
                <YAxis width={80} type="category" dataKey="type" offset={10} />

                <Tooltip />

                <Bar
                  radius={[0, 0, 0, 0]}
                  dataKey="value1"
                  fill="#5DADE2"
                  stackId="a"
                />
                <Bar
                  stackId="a"
                  radius={[0,0,0,0]}
                  dataKey="value2"
                  fill="#154360"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    );
  }
}
