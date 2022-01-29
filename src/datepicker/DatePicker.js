import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

function DatePick({ onSelectDate }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelectedDate = (date) => {
    onSelectDate(date);
  };

  return (
    <div className="datepicker">
      <p>Filter data</p>
      <DatePicker
        selected={selectedDate ? selectedDate : Date.now()}
        onChange={(date) => {
          setSelectedDate(date);
          handleSelectedDate(date);
        }}
        dateFormat="yyyy-MM-dd"
        // maxDate={new Date()}
        isClearable="true"
      />
    </div>
  );
}

export default DatePick;
