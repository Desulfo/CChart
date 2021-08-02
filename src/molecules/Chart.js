import { BarChart, Legend, Bar, XAxis, YAxis, Tooltip } from "recharts";

import classes from "./chart.module.css";

function Chart({ results }) {
  console.log(results);
  let correctData = [];
  for (const [key, value] of Object.entries(results)) {
    const chartObject = { day: key, ...value };
    correctData.push(chartObject);
  }
  return (
    <BarChart
      className={classes.chartWrapper}
      width={600}
      height={300}
      data={correctData}
    >
      <XAxis dataKey="day" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="deaths" fill="#8884d8" />
      <Bar dataKey="confirmed" fill="#82ca9d" />
    </BarChart>
  );
}

export default Chart;
