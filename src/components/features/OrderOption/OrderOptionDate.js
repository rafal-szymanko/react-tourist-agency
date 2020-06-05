import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';


const OrderOptionDate = ({setOptionValue}) => {
  const [startDate, setStartDate] = useState(null);


  return (
    <DatePicker 
      selected={startDate} 
      onSelect={date => setStartDate(date)} 
      onChange={date => setOptionValue(date + 1)} 
      minDate={new Date()}
      dateFormat="dd/MM/RRRR"
      placeholderText="Click to select a date"
    />
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;
