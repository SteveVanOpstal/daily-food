import React from 'react';
import {useSelector} from 'react-redux';
import {peopleAdjustedAmount} from './amount';

const ProductName = ({measurement}) => {
  const people = useSelector((state) => state.people.value);

  return (
    <React.Fragment>
      {peopleAdjustedAmount(measurement, people) <= 1
        ? measurement.product.name
        : measurement.product.plural || measurement.product.name}
    </React.Fragment>
  );
};

export default ProductName;
