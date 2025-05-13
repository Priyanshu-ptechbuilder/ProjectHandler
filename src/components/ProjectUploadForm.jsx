import React, { useState } from 'react';
import '../styles/Student/ProjectUploadForm.css';

const ProjectUploadForm = () => {
  const [project, setProject] = useState({
    title: '',
    description: '',
    category: '',
    branch: '',
    semester: '',
    members: '',
    files: {},
    link: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProject({ ...project, files: { ...project.files, [name]: files[0] } });
    } else {
      setProject({ ...project, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle upload logic here
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <h2>Upload Project</h2>
      <input name="title" placeholder="Project Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <select name="category" onChange={handleChange} required>
        <option value="">Select Category</option>
        <option value="Minor">Minor</option>
        <option value="Major">Major</option>
      </select>
      <input name="branch" placeholder="Branch" onChange={handleChange} required />
      <input name="semester" placeholder="Semester" onChange={handleChange} required />
      <input name="members" placeholder="Team Members" onChange={handleChange} required />
      <input type="file" name="pdf" accept=".pdf" onChange={handleChange} />
      <input type="file" name="srs" accept=".doc,.docx,.pdf" onChange={handleChange} />
      <input type="file" name="ppt" accept=".ppt,.pptx" onChange={handleChange} />
      <input name="link" placeholder="Working Link" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProjectUploadForm;
