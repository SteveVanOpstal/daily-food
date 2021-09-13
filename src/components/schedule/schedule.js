import * as React from 'react';
import {IconButton, Stack, Box, Grid} from '@material-ui/core';
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
    <React.Fragment>
      <IconButton onClick={setToday}>
        <CalendarTodayIcon />
      </IconButton>
      <Stack sx={{maxWidth: 600, margin: 'auto'}}>
        <Grid container>
          <Grid item xs={1}>
            <IconButton onClick={monthDown}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Box sx={{textAlign: 'center'}}>
              {format(date, 'MMMM' + (isThisYear(date) ? '' : ' u'))}
            </Box>
          </Grid>
          <Grid item xs={1}>
            <IconButton onClick={monthUp}>
              <ChevronRightIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Box sx={{width: '100%'}}>
          <Month schedules={schedules} year={year} month={month} />
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default Schedule;
