import {Box} from '@material-ui/core';
import React from 'react';
import Amount from './amount';
import ActionIcon from './actionIcon';
import Product from './product';

const Action = ({action}) => {
  return (
    <React.Fragment>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 0.4}}>
        <ActionIcon action={action} />
        {(() => {
          if (action.measurement) {
            const [start, end] = action.description.split('{1}');
            return (
              <span>
                {start} <Amount measurement={action.measurement} />{' '}
                <Product amount={action.measurement.amount} product={action.measurement.product} />{' '}
                {end}
              </span>
            );
          } else {
            return <span>{action.description}</span>;
          }
        })()}
      </Box>
      <Box sx={{marginLeft: 3}}>
        {action.actions.map((a) => (
          <Action key={a.id} action={a} />
        ))}
      </Box>
    </React.Fragment>
  );
};

export default Action;
