import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';

import { Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render(){

    const {options,tripCost} = this.props; 
    
    return (
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} tripOptions={options}/>
        </Col>
      </Row>
    );
  }

}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,

};

export default OrderForm;
