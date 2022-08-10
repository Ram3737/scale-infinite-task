import { useCallback, useEffect, useState } from "react";
import { Chart } from "react-google-charts";

function PieChart() {
  const [data1, setData] = useState([]);
  const [helpr, setHelpr] = useState(true);

  if (helpr) {
    fetch(
      "http://216.48.189.38:9090/api/v1/query?query=container_cpu_usage_seconds_total{namespace=%22sathiyapk%22,container=%22POD%22}",
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((rese) => setData(rese.data.result));

    setHelpr(false);
  }

  console.log(data1);

  let datafromUrl = [["Task", "Hours per Day"]];

  for (const [index, value] of data1.entries()) {
    let metricValue = [];
    metricValue.push(value.metric.pod, +value.value[1]);
    datafromUrl.push(metricValue);
  }

  const options = {
    title: "Data received from API",
  };

  return (
    <Chart
      chartType="PieChart"
      data={datafromUrl}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}

export default PieChart;
