import { useState } from 'react';

export default function GeneralInfo() {
  const [isEditing, setIsEditing] = useState(true);
  const [info, setInfo] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });
  const toggleEdit = (e) => { e.preventDefault(); setIsEditing(!isEditing); };

  return (
    <section className="cv-section">
      <h2>General Information</h2>
      {isEditing ? (
        <form onSubmit={toggleEdit}>
          <input type="text" name="name" placeholder="Name" value={info.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={info.email} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" value={info.phone} onChange={handleChange} required />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="display-mode">
          <p><strong>Name:</strong> {info.name}</p>
          <p><strong>Email:</strong> {info.email}</p>
          <p><strong>Phone:</strong> {info.phone}</p>
          <button onClick={toggleEdit}>Edit</button>
        </div>
      )}
    </section>
  );
}