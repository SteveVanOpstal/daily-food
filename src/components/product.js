import {Button, Dialog, Box} from '@material-ui/core';
import React from 'react';
import Measurements from './measurements';
import ProductName from './productName';
import DialogContent from '@material-ui/core/DialogContent';
import {styled} from '@material-ui/system';
import Tips from './tips';

const Title = styled('h1')({
  fontSize: 22,
  marginTop: 0,
});

const Product = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <span>
      {(() => {
        if (props.product.measurements?.length) {
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
              <ProductName {...props} />
            </Button>
          );
        } else {
          return <ProductName {...props} />;
        }
      })()}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <Title>
            <ProductName {...props} />
          </Title>
          <Box sx={{paddingBottom: 2}}>
            <Measurements measurements={props.product.measurements} />
          </Box>
          <Tips tips={props.product.tips} />
        </DialogContent>
      </Dialog>
    </span>
  );
};

export default Product;
