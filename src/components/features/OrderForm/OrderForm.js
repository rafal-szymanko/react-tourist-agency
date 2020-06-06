import React from 'react';
import PropTypes from 'prop-types';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

import { Row, Col } from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render() {

    const { options, tripCost, setOrderOption } = this.props;

    return (
      <Row>
        <Col xs={12}>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} tripCost={tripCost}/>
            </Col>
          ))}
          <OrderSummary tripCost={tripCost} tripOptions={options} />
        </Col>
      </Row>
    );
  }

}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;
