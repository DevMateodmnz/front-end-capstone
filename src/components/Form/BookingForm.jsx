import React, { useState } from 'react';

export default function BookingForm({ availableTimes, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', date: selectedDate });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
        placeholder="1"
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
  import React, { useState } from 'react';
import '../../styles/BookingForm.css';

export default function BookingForm({ availableTimes, dispatch, submitForm }) {
  // Add validation states and logic here
  const [errors, setErrors] = useState({});
  
  // Add validation functions
  const validateField = (name, value) => {
    // Validation logic
  };

  return (
    <form aria-label="Reservation form">
      {/* Add HTML5 validation attributes */}
      <input 
        type="date" 
        required
        min={new Date().toISOString().split('T')[0]}
      />
      
      {/* Add ARIA attributes */}
      <label htmlFor="guests">Guests</label>
      <input 
        id="guests"
        aria-invalid={!!errors.guests}
        aria-describedby="guestError"
      />
      
      {/* Validation messages */}
      {errors.guests && (
        <span id="guestError" role="alert">{errors.guests}</span>
      )}
    </form>
  );
}
}
