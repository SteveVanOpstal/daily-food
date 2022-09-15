import * as React from 'react';
import {IconButton, Stack, Box} from '@material-ui/core';
import Month from './month';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import {format, isThisYear} from 'date-fns';

const Schedule = ({schedules}) => {
  const currentDate = new Date();
  const [year, setYear] = React.useState(currentDate.getFullYear());
  const [month, setMonth] = React.useState(currentDate.getMonth());
  const date = new Date(year, month);

  const monthUp = () => {
    if (month >= 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const monthDown = () => {
    if (month <= 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  const setToday = () => {
    const now = new Date();
    setMonth(now.getMonth());
    setYear(now.getFullYear());
  };

  return (
    <Stack sx={{maxWidth: 600, margin: 'auto'}}>
      <Box sx={{margin: 'auto'}}>
        <IconButton onClick={setToday}>
          <CalendarTodayIcon />
        </IconButton>
      </Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          margin: '0 1em',
        }}
      >
        <IconButton onClick={monthDown}>
          <ChevronLeftIcon />
        </IconButton>
        <Box sx={{textAlign: 'center'}}>
          {format(date, 'MMMM' + (isThisYear(date) ? '' : ' u'))}
        </Box>
        <IconButton onClick={monthUp}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
      <Month schedules={schedules} year={year} month={month} />
    </Stack>
  );
};

export default Schedule;
