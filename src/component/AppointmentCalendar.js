import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import '../App.css'
const AppointmentCalendar = ({handleChange , selectedDate , selectedService}) => {
  

  // Sample list of available dates (replace with your data)
  const availableDates = [
    // new Date(2024, 10, 12),
    // new Date(2024, 10, 13),
    // new Date(2024, 10, 19),
    // new Date(2024, 10, 20),
    // new Date(2024, 10, 26),
    // new Date(2024, 10, 27),
  ];

  // Function to check if the date is available
  const isDateUnAvailable = (date) => {
    let currentDate = new Date();
    let oneMonthLater = currentDate.setMonth(currentDate.getMonth() + 1);
    if (date < (new Date()).setDate((new Date()).getDate() - 1)  || date > oneMonthLater || date.toDateString().includes('Sun')) {   
      return true;
    }else{
      return availableDates.some(
        (availableDate) => date.toDateString() === availableDate.toDateString()
      );
    }
  };



  return (
    <div>
      {/* <h3>Select an Appointment Date</h3> */}
      <Calendar
        onChange={handleChange}
        value={selectedDate}
        tileDisabled={({ date }) => isDateUnAvailable(date)}
      />
      {selectedDate && (
        <p>
          You have selected Date: <strong>{selectedDate.toDateString()}</strong>
        </p>
      )}
      {selectedService && (
        <p>
          and selected service: <strong>{selectedService}</strong>
        </p>
      )}
    </div>
  );
};

export default AppointmentCalendar;