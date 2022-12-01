import {styled} from '@mui/material';
import React from 'react';

import Amount from './measurement/amount';
import Product from './measurement/product';

const Grid = styled('div')({
  display: 'grid',
  gridTemplateAreas: 'amount product',
  gridTemplateColumns: 'auto 1fr',
  columnGap: '1rem',
});

const AmountArea = styled(Amount)({
  gridArea: 'amount',
});

const ProductArea = styled(Product)({
  gridArea: 'product',
});

const Measurements = ({measurements}) => {
  return (
    <Grid>
      {measurements.map((measurement) => (
        <React.Fragment key={measurement.id}>
          <AmountArea measurement={measurement} />
          <ProductArea measurement={measurement} />
        </React.Fragment>
      ))}
    </Grid>
  );
};

export default Measurements;
