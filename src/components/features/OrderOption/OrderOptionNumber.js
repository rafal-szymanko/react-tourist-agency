import React from 'react';
import styles from './OrderOption.scss';
import { parseOptionPrice } from '../../../utils/parseOptionPrice';
import PropTypes from 'prop-types';


const OrderOptionNumber = ({ currentValue, limits, setOptionValue, tripCost, price}) => (
  <div className={styles.number}>
    <input
      className={styles.input}
      type="number"
      value={currentValue}
      min={limits.min}
      max={limits.max}
      onChange={event => setOptionValue(event.currentTarget.value)}>
    </input>
    <div>
      <span>Charge per additional each person per night: <strong>{(parseOptionPrice(tripCost).value * parseOptionPrice(price).value).toFixed(2)}</strong></span>
    </div>
  </div>
);

OrderOptionNumber.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.node,
  limits: PropTypes.object,
  tripCost: PropTypes.string,
  price: PropTypes.string,

  
  
};



export default OrderOptionNumber;
