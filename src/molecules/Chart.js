import { BarChart, Legend, Bar, XAxis, YAxis, Tooltip } from "recharts";

const response = {
  count: 59,
  result: {
    "2020-01-22": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-23": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-24": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-25": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-26": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-27": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-28": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-29": {
      confirmed: 0,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-30": {
      confirmed: 1,
      deaths: 0,
      recovered: 0,
    },
    "2020-01-31": {
      confirmed: 1,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-01": {
      confirmed: 1,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-02": {
      confirmed: 2,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-03": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-04": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-05": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-06": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-07": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-08": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-09": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-10": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-11": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-12": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-13": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-14": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-15": {
      confirmed: 3,
      deaths: 0,
      recovered: 0,
    },
    "2020-02-16": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-17": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-18": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-19": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-20": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-21": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-22": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-23": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-24": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-25": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-26": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-27": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-28": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-02-29": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-01": {
      confirmed: 3,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-02": {
      confirmed: 5,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-03": {
      confirmed: 5,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-04": {
      confirmed: 28,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-05": {
      confirmed: 30,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-06": {
      confirmed: 31,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-07": {
      confirmed: 34,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-08": {
      confirmed: 39,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-09": {
      confirmed: 43,
      deaths: 0,
      recovered: 3,
    },
    "2020-03-10": {
      confirmed: 56,
      deaths: 0,
      recovered: 4,
    },
    "2020-03-11": {
      confirmed: 62,
      deaths: 1,
      recovered: 4,
    },
    "2020-03-12": {
      confirmed: 73,
      deaths: 1,
      recovered: 4,
    },
    "2020-03-13": {
      confirmed: 82,
      deaths: 2,
      recovered: 4,
    },
    "2020-03-14": {
      confirmed: 102,
      deaths: 2,
      recovered: 4,
    },
    "2020-03-15": {
      confirmed: 113,
      deaths: 2,
      recovered: 13,
    },
    "2020-03-16": {
      confirmed: 119,
      deaths: 2,
      recovered: 13,
    },
    "2020-03-17": {
      confirmed: 142,
      deaths: 3,
      recovered: 14,
    },
    "2020-03-18": {
      confirmed: 156,
      deaths: 3,
      recovered: 14,
    },
    "2020-03-19": {
      confirmed: 194,
      deaths: 4,
      recovered: 15,
    },
    "2020-03-20": {
      confirmed: 244,
      deaths: 5,
      recovered: 20,
    },
  },
};
let correctData = [];

for (const [key, value] of Object.entries(response["result"])) {
  //console.log(`${key}  ${value}`)
  const chartObject = { day: key, ...value };
  correctData.push(chartObject);
}
console.log(correctData);
function Chart() {
  return (
    <BarChart width={600} height={300} data={correctData}>
      {/* <Line type="monotone" dataKey="confirmed" stroke="#8884d8" /> */}
      {/* <CartesianGrid stroke="#ccc" /> */}
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
