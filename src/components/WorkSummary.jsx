import React from 'react';
import '../styles/Student/WorkSummary.css'; // Ensure this path is correct
import { PieChart, Pie, Cell, Legend } from 'recharts';

const data = [
  { name: 'Alice', value: 9 },
  { name: 'Bob', value: 3 },
];

const COLORS = ['#4f46e5', '#10b981'];

const WorkSummary = () => {
  const totalHours = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="work-summary-panel">
      <h2>Work Summary</h2>
      <div className="pie-container">
        <PieChart width={280} height={250}>
          <Pie
            data={data}
            cx={140}
            cy={110}
            innerRadius={50}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </div>
      <p>Total Hours: {totalHours}</p>
    </div>
  );
};

export default WorkSummary;
