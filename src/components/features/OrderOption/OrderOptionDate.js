import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';
import styled from 'styled-components';



const DatePickerStyled = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }
`;

const OrderOptionDate = ({ setOptionValue }) => {
  const [startDate, setStartDate] = useState(null);

  return (
    <DatePickerStyled>
      <DatePicker
        className={styles.input}
        selected={startDate}
        onSelect={date => setStartDate(date)}
        onChange={date => setOptionValue(date)}
        minDate={new Date()}
        dateFormat="dd/MM/RRRR"
        placeholderText="Click to select a date"
      />
    </DatePickerStyled>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};


export default OrderOptionDate;
