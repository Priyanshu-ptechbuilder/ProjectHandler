import React, { useState } from "react";
import "../styles/Student/Performance.css"; // Ensure this path is correct
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell,
  LineChart, Line, CartesianGrid, Legend, ResponsiveContainer
} from "recharts";

const contributionData = [
  { name: "Alice", tasks: 12 },
  { name: "Bob", tasks: 9 },
  { name: "Charlie", tasks: 14 },
  { name: "Daisy", tasks: 8 },
];

const timelineData = [
  { week: "Week 1", planned: 20, actual: 18 },
  { week: "Week 2", planned: 40, actual: 35 },
  { week: "Week 3", planned: 60, actual: 55 },
  { week: "Week 4", planned: 80, actual: 70 },
  { week: "Week 5", planned: 100, actual: 95 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

export default function Performance() {
  const [ratings, setRatings] = useState({
    documentation: "",
    development: "",
    innovation: "",
  });

  const handleRatingChange = (e) => {
    setRatings({ ...ratings, [e.target.name]: e.target.value });
  };

  return (
    <div className="performance-container">
      <h2>Team Performance Overview</h2>

      <div className="charts-container">
        <div className="chart-panel">
          <h3>Contribution Per Member</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={contributionData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="tasks" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-panel">
          <h3>Timeline: Planned vs Actual</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timelineData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="planned" stroke="#8884d8" />
              <Line type="monotone" dataKey="actual" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="evaluation-panel">
        <h3>Mentor / Teacher Evaluation</h3>
        <div className="rating-fields">
          {["documentation", "development", "innovation"].map((field) => (
            <div className="rating-input" key={field}>
              <label>{field.charAt(0).toUpperCase() + field.slice(1)}:</label>
              <select name={field} value={ratings[field]} onChange={handleRatingChange}>
                <option value="">Select Rating</option>
                <option value="Excellent">Excellent</option>
                <option value="Good">Good</option>
                <option value="Average">Average</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="peer-review-section">
        <h3>Peer Review</h3>
        <textarea placeholder="Comments from team members on each other's contributions..." />
      </div>

      <div className="final-remarks-section">
        <h3>Remarks / Final Comments</h3>
        <textarea placeholder="Final thoughts or summary by mentor/teacher..." />
      </div>
    </div>
  );
}
