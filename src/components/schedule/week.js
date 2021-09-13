import * as React from 'react';
import {Stack} from '@material-ui/core';
import {addDays} from 'date-fns';
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
