import {Box, Button, Dialog, DialogContent, styled} from '@mui/material';
import React from 'react';

import Tips from '../../tips';
import Measurements from '../measurements';
import ProductName from './productName';

const Title = styled('h1')({
  fontSize: 22,
  marginTop: 0,
});

const Product = ({measurement}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <span>
      {(() => {
        if (measurement.product.measurements?.length) {
          return (
            <Button
              sx={{
                padding: 0,
                display: 'block',
                textTransform: 'none',
                fontSize: 'unset',
                lineHeight: 'unset',
              }}
              onClick={() => setOpen(true)}
            >
              <ProductName measurement={measurement} />
            </Button>
          );
        } else {
          return <ProductName measurement={measurement} />;
        }
      })()}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Title>
            <ProductName measurement={measurement} />
          </Title>
          <Box sx={{paddingBottom: 2}}>
            <Measurements measurements={measurement.product.measurements} />
          </Box>
          <Tips tips={measurement.product.tips} />
        </DialogContent>
      </Dialog>
    </span>
  );
};

export default Product;
