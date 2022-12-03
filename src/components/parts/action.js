import {Box} from '@mui/material';
import React from 'react';

import Amount from '../measurements/measurement/amount';
import Product from '../measurements/measurement/product';
import ActionIcon from './actionIcon';

const Action = ({action}) => {
  return (
    <React.Fragment>
      <Box sx={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
        <ActionIcon action={action} />
        {(() => {
          if (action.measurement) {
            const [start, end] = action.description.split('{1}');
            return (
              <span>
                {start} <Amount measurement={action.measurement} />{' '}
                <Product measurement={action.measurement} /> {end}
              </span>
            );
          } else {
            return <span>{action.description}</span>;
          }
        })()}
      </Box>
      <Box sx={{marginLeft: 3}}>
        {action.actions
          .filter((a) => !!a)
          .map((a) => (
            <Action key={a.id} action={a} />
          ))}
      </Box>
    </React.Fragment>
  );
};

export default Action;
