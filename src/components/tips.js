import {Box} from '@material-ui/core';
import React from 'react';
import Tip from './tip';

const Tips = ({tips}) => {
  return (
    <Box>
      {tips.map((tip) => (
        <Tip key={tip.id} {...tip} />
      ))}
    </Box>
  );
};

export default Tips;
