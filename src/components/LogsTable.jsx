import React, { useState } from 'react';
import '../styles/Student/LogsTable.css';

const sampleLogs = [
  { date: '2025-05-10', member: 'Alice', description: 'Updated UI components', hours: 4 },
  { date: '2025-05-11', member: 'Bob', description: 'Fixed bugs in auth flow', hours: 3 },
  { date: '2025-05-11', member: 'Alice', description: 'Dashboard integration', hours: 5 }
];

const LogsTable = () => {
  const [filter, setFilter] = useState('');
  const filteredLogs = sampleLogs.filter(log => log.member.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="logs-table-panel">
      <h2>Logs</h2>
      <input type="text" placeholder="Filter by member" value={filter} onChange={e => setFilter(e.target.value)} />
      <table className="logs-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Member</th>
            <th>Description</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {filteredLogs.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.member}</td>
              <td>{log.description}</td>
              <td>{log.hours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;
