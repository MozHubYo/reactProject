import React from 'react';
import './chart.css';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <LineChart data={data}>
          {{ grid } && <CartesianGrid strokeDasharray="1 10" stroke="purple" />}
          <XAxis dataKey={dataKey} stroke="purple" />
          <YAxis stroke="purple" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="purple"
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
