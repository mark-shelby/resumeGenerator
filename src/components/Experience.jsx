import { useState } from 'react';

export default function Experience() {
  const [isEditing, setIsEditing] = useState(true);
  const [exp, setExp] = useState({ company: '', position: '', responsibilities: '', dateFrom: '', dateTo: '' });

  const handleChange = (e) => setExp({ ...exp, [e.target.name]: e.target.value });
  const toggleEdit = (e) => { e.preventDefault(); setIsEditing(!isEditing); };

  return (
    <section className="cv-section">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <form onSubmit={toggleEdit}>
          <input type="text" name="company" placeholder="Company Name" value={exp.company} onChange={handleChange} required />
          <input type="text" name="position" placeholder="Position Title" value={exp.position} onChange={handleChange} required />
          <textarea name="responsibilities" placeholder="Main Responsibilities" value={exp.responsibilities} onChange={handleChange} required />
          <input type="date" name="dateFrom" placeholder="Date From" value={exp.dateFrom} onChange={handleChange} required />
          <input type="date" name="dateTo" placeholder="Date To" value={exp.dateTo} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-mode">
          <p><strong>Company:</strong> {exp.company}</p>
          <p><strong>Position:</strong> {exp.position}</p>
          <p><strong>Responsibilities:</strong> {exp.responsibilities}</p>
          <p><strong>Duration:</strong> {exp.dateFrom} to {exp.dateTo}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}