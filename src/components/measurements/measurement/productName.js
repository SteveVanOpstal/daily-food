import React from 'react';

const ProductName = ({amount, product}) => {
  return (
    <React.Fragment>
      {amount === 1 || !product.plural ? product.name : product.plural}
    </React.Fragment>
  );
};

export default ProductName;
