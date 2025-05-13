import React from 'react';
import '../styles/Student/FeedbackSection.css'; // Make sure the path is correct

const FeedbackSection = () => {
  return (
    <div className="feedback-section">
      <h2>Teacher Feedback</h2>
      <textarea placeholder="Leave feedback after review..." />
      <button>Submit Feedback</button>
    </div>
  );
};

export default FeedbackSection;
