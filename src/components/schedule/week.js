import {Stack} from '@mui/material';
import {addDays} from 'date-fns';
import * as React from 'react';

import Day from './day';

const Week = ({schedules, year, month, date, onClick}) => {
  return (
    <Stack direction="row">
      {(() => {
        return [0, 1, 2, 3, 4, 5, 6].map((offset) => {
          const offsetDate = addDays(date, offset);
          return (
            <Day key={offset} schedules={schedules} year={year} month={month} date={offsetDate} />
          );
        });
      })()}
    </Stack>
  );
};

export default Week;
