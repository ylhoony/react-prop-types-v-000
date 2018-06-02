import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import Order from './components/Order'

const scoopSelected = ['Blue', 'Red'];

const orderDetail = {
  customerName: "John Doe",
  orderedAt: 1527893980
}

ReactDOM.render(
  <Order 
    scoops={scoopSelected}
    orderInfo={orderDetail}
  />,
  document.getElementById('root')
);
