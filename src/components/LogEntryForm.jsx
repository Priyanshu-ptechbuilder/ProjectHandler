import React, { useState } from 'react';
import '../styles/Student/LogEntryForm.css';

const LogEntryForm = () => {
  const [form, setForm] = useState({
    date: '',
    member: '',
    description: '',
    hours: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Submitted log:', form);
    // Submit logic here
  };

  return (
    <div className="log-form-panel">
      <h2>Log Work Entry</h2>
      <form onSubmit={handleSubmit} className="log-form">
        <input type="date" name="date" value={form.date} onChange={handleChange} required />
        <input type="text" name="member" placeholder="Team Member" value={form.member} onChange={handleChange} required />
        <textarea name="description" placeholder="Work Description" value={form.description} onChange={handleChange} required />
        <input type="number" name="hours" placeholder="Hours Spent" value={form.hours} onChange={handleChange} required />
        <button type="submit">Add Log</button>
      </form>
    </div>
  );
};

export default LogEntryForm;
