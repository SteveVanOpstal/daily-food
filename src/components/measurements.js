import React from 'react';
import Amount from './amount';
import Product from './product';
import {styled} from '@material-ui/system';

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

const Measurements = ({children, measurements}) => {
  return (
    <Grid>
      {measurements.map((measurement) => (
        <React.Fragment key={measurement.id}>
          <AmountArea measurement={measurement} />
          <ProductArea amount={measurement.amount} product={measurement.product} />
        </React.Fragment>
      ))}
      {children}
    </Grid>
  );
};

export default Measurements;
