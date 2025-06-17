import React, { createContext, useReducer } from 'react';

const AvailableTimesContext = createContext();

function timesReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
}

export function AvailableTimesProvider({ children }) {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  
  return (
    <AvailableTimesContext.Provider value={{ availableTimes, dispatch }}>
      {children}
    </AvailableTimesContext.Provider>
  );
}

export default AvailableTimesContext;