import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import {promoPrice} from '../../../utils/promoPrice';


const OrderSummary = (props) => (
  <div>
    <h3 className={styles.component}>
      <strong>Price from: {formatPrice(promoPrice(calculateTotal(formatPrice(props.tripCost), props.tripOptions),20))}</strong>
    </h3>
    <p>Regular price: {formatPrice(calculateTotal(formatPrice(props.tripCost), props.tripOptions))}</p>
  </div>

);

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  tripOptions: PropTypes.object,
};

export default OrderSummary;
