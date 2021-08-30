import React from 'react';
import Amount from './amount';
import Product from './product';

const Measurement = ({measurement}) => {
  return (
    <React.Fragment>
      <Amount measurement={measurement} />{' '}
      <Product amount={measurement.amount} product={measurement.product} />
    </React.Fragment>
  );
};

export default Measurement;
