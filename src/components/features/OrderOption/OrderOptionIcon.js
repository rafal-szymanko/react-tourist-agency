import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcon = ({ values, required, setOptionValue, currentValue }) => (
  <div>
    {required == false ? (
      <div 
        className={styles.icon}
        value =''
        onClick={() => setOptionValue('')}
      ><Icon name={'times-circle'}/>none</div>
    ): ''}
    {values.map(value => (
      <div className={value.id == currentValue ? styles.iconActive : styles.icon}
        key={value.id}
        onClick={() => setOptionValue(value.id)}
      ><Icon name={value.icon} />{value.name} ({formatPrice(value.price)})</div>
    ))}
  </div>
);


OrderOptionIcon.propTypes = {
  setOptionValue: PropTypes.func,
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.string,
};

export default OrderOptionIcon;
