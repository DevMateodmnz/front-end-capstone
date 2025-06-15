import React, { useReducer } from 'react';
import BookingForm from './BookingForm';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  const selectedDate = action.date;
  // In the future, this can change based on the date
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

export default function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main>
      <h1>Reserve a table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
}
