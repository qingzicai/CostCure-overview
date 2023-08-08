import { Chart } from "react-google-charts";
import { data, options } from './chartConfig.ts';


export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}