import {Box} from '@mui/material';
import React from 'react';

import Tip from './tip';

const Tips = ({tips}) => {
  return (
    <Box>
      {tips.map((tip) => (
        <Tip key={tip.id} title={tip.title}>
          {tip.description}
        </Tip>
      ))}
    </Box>
  );
};

export default Tips;
