import {Button} from '@mui/material';
import {format, isSameDay, isSameMonth, isToday, parseISO} from 'date-fns';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {set} from '../../state/scheduleSlice';

const Day = ({schedules, year, month, date}) => {
  const schedule = schedules.find((schedule) => isSameDay(parseISO(schedule.date), date));
  const selectedSchedule = useSelector((state) => state.schedule.value);
  const dispatch = useDispatch();

  const isInCurrentMonth = isSameMonth(date, new Date(year, month));
  const isSelectedSchedule = isSameDay(parseISO(schedule?.date), parseISO(selectedSchedule?.date));

  const color = isInCurrentMonth
    ? isSelectedSchedule
      ? 'primary.contrastText'
      : 'primary.main'
    : 'text.secondary';

  const select = () => {
    if (isSelectedSchedule) {
      dispatch(set(undefined));
    } else {
      dispatch(set(schedule));
    }
  };

  return (
    <Button
      sx={{
        width: '100%',
        color,
        backgroundColor: isSelectedSchedule ? 'primary.main' : undefined,
        textAlign: 'center',
        border: isToday(date) ? '1px solid' : 'none',
        borderColor: color,
        ':hover': {
          backgroundColor: isSelectedSchedule ? 'secondary.main' : undefined,
        },
        minWidth: 0,
      }}
      disabled={!schedule}
      onClick={() => select(schedule)}
    >
      {format(date, 'd')}
    </Button>
  );
};

export default Day;
