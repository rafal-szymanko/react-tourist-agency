import React from 'react';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';
import { Row, Col } from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';

import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';


const sendOrder = (options, tripCost, tripId, tripName) => {

  const totalCost = formatPrice(calculateTotal(tripCost, options));
  const payload = {
    ...options,
    totalCost,
    tripId,
    tripName,
  };

  if (payload.contact.length == 0 || payload.name.length == 0 || payload.startDate.length == 0) {
    alert('Name, contact info and start date fields should be filled out');

  } else {
    const url = settings.db.url + '/' + settings.db.endpoint.orders;
    const fetchOptions = {
      cache: 'no-cache',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    };
    fetch(url, fetchOptions)
      .then(function (response) {
        return response.json();
      }).then(function (parsedResponse) {
        console.log('parsedResponse', parsedResponse);
      });
  }
};



class OrderForm extends React.Component {
  render() {

    const { options, tripCost, setOrderOption, tripDetails } = this.props;
    return (
      <Row>
        <Col xs={12}>
          {pricing.map(option => (
            <Col md={4} key={option.id}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} tripCost={tripCost} />
            </Col>
          ))}
          <OrderSummary tripCost={tripCost} tripOptions={options} />
          <Button onClick={() => sendOrder(options, tripCost, tripDetails.id, tripDetails.name)}>Order now!</Button>
        </Col>
      </Row>
    );
  }

}

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripDetails: PropTypes.object,

};

export default OrderForm;
