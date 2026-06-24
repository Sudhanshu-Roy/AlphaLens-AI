// src/components/PriceChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function PriceChart({
  data
}) {

  return (
    <div
      className="
      bg-white
      rounded-3xl
      shadow-md
      p-6
      h-[500px]
      "
    >
      <h2
        className="
        text-xl
        font-bold
        mb-6
        "
      >
        Stock Performance
      </h2>

      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <LineChart 
          data={data}
          margin={{
            top: 10,
            right: 20,
            left: 10,
            bottom: 30
          }}
        >
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 12 }}
            minTickGap={60}
            tickFormatter={(value) =>value.slice(5)}
          />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="close"
            stroke="#0EA5E9"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PriceChart;