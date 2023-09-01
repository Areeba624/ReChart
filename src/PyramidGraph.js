import React from 'react';
import Chart, {
  CommonSeriesSettings,
  ValueAxis,
  Label,
  Legend,
  Series,
  Tooltip,
  Margin,
} from 'devextreme-react/chart';


const data = [{
  age: '0-4',
  male: -3.1,
  female: 2.9,
}, {
  age: '5-9',
  male: -3.1,
  female: 3.0,
}, {
  age: '10-14',
  male: -3.0,
  female: 2.9,
}, {
  age: '15-19',
  male: -3.2,
  female: 3.0,
}, {
  age: '20-24',
  male: -3.5,
  female: 3.3,
}, {
  age: '25-29',
  male: -3.5,
  female: 3.4,
}, {
  age: '30-34',
  male: -3.5,
  female: 3.3,
}, {
  age: '35-39',
  male: -3.3,
  female: 3.1,
}, {
  age: '40-44',
  male: -3.7,
  female: 3.4,
}, {
  age: '45-49',
  male: -3.8,
  female: 3.5,
}, {
  age: '50-54',
  male: -3.4,
  female: 3.2,
}, {
  age: '55-59',
  male: -3.1,
  female: 3.0,
}, {
  age: '60-64',
  male: -2.7,
  female: 2.7,
}, {
  age: '65-69',
  male: -2.9,
  female: 2.9,
}, {
  age: '70-74',
  male: -2,
  female: 2.1,
}, {
  age: '75-79',
  male: -1.2,
  female: 1.4,
}, {
  age: '80-84',
  male: -0.8,
  female: 1.2,
}, {
  age: '85-89',
  male: -0.5,
  female: 0.8,
}, {
  age: '90-94',
  male: -0.2,
  female: 0.5,
}, {
  age: '95+',
  male: 0,
  female: 0.1,
}];



class PyramidChart extends React.Component {
  render() {
    return (
      <Chart
        title="Population Pyramid For Norway 2016"
        dataSource={data}
        id="chart"
        rotated={true}
        barGroupWidth={10}
      >
        <CommonSeriesSettings
          type="stackedbar"
          argumentField="age"
        />
        <Series
          valueField="male"
          name="Male"
          color="#2DC1CD"
        />
        <Series
          valueField="female"
          name="Female"
          color="#104C51"
        />
        <Tooltip
          enabled={true}
          customizeTooltip={this.customizeTooltip}
        />
        <ValueAxis>
          <Label customizeText={this.customizeLabel} />
        </ValueAxis>
        <Legend
          verticalAlignment="bottom"
          horizontalAlignment="center"
        >
          <Margin left={50} />
        </Legend>

      </Chart>
    );
  }

  customizeTooltip(e) {
    return { text: Math.abs(e.valueText) };
  }

  customizeLabel(e) {
    return `${Math.abs(e.value)}%`;
  }
}

export default PyramidChart;
