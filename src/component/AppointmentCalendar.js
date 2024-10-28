import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  // Sample list of available dates (replace with your data)
  const availableDates = [
    // new Date(2024, 9, 12),
    // new Date(2024, 9, 13),
    // new Date(2024, 9, 19),
    // new Date(2024, 9, 20),
    // new Date(2024, 9, 26),
    // new Date(2024, 9, 27),
  ];

  // Function to check if the date is available
  const isDateUnAvailable = (date) => {
    return availableDates.some(
      (availableDate) => date.toDateString() === availableDate.toDateString()
    );
  };

  return (
    <div>
      {/* <h3>Select an Appointment Date</h3> */}
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileDisabled={({ date }) => isDateUnAvailable(date)}
      />
      {selectedDate && (
        <p>
          You have selected: <strong>{selectedDate.toDateString()}</strong>
        </p>
      )}
    </div>
  );
};

export default AppointmentCalendar;