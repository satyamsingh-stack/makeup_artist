import React from 'react';
import './Appointment.css';

function Appointment() {
  return (
    <div className="appointment">
      <h1>Book an Appointment</h1>
      <p>Ready to look your best? Schedule your appointment with us today!</p>
      <form className="appointment-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="date">Preferred Date:</label>
        <input type="date" id="date" name="date" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Appointment;