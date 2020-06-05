import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionIcons from './OrderOptionIcon';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionText from './OrderOptionText';
import PropTypes from 'prop-types';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,

};

const OrderOption = ({name, type, setOrderOption, id, ...otherProps }) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps} setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};

OrderOption.propTypes = {
  name: PropTypes.string,
};


export default OrderOption;
