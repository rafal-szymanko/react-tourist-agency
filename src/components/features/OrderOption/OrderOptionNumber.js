import React from 'react';
import styles from './OrderOption.scss';

import PropTypes from 'prop-types';


const OrderOptionNumber = ({currentValue, limits, setOptionValue}) => (
  <div className={styles.number}>
    <input 
      className={styles.input}
      type="number" 
      value={currentValue} 
      min={limits.min} 
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}>
    </input> 
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
  limits: PropTypes.object,
};
  


export default OrderOptionNumber;