import { useState } from 'react';

export default function Education() {
  const [isEditing, setIsEditing] = useState(true);
  const [edu, setEdu] = useState({ school: '', title: '', date: '' });

  const handleChange = (e) => setEdu({ ...edu, [e.target.name]: e.target.value });
  const toggleEdit = (e) => { e.preventDefault(); setIsEditing(!isEditing); };

  return (
    <section className="cv-section">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <form onSubmit={toggleEdit}>
          <input type="text" name="school" placeholder="School Name" value={edu.school} onChange={handleChange} required />
          <input type="text" name="title" placeholder="Title of Study" value={edu.title} onChange={handleChange} required />
          <input type="date" name="date" value={edu.date} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-mode">
          <p><strong>School:</strong> {edu.school}</p>
          <p><strong>Degree:</strong> {edu.title}</p>
          <p><strong>Date:</strong> {edu.date}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}