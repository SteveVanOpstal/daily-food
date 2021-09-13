import * as React from 'react';
import {useSelector} from 'react-redux';
import {Box, Stack, Link} from '@material-ui/core';
import {format, getDaysInMonth, eachWeekOfInterval, addDays, isSameWeek, parseISO} from 'date-fns';
import Week from './week';

const Month = ({schedules, year, month}) => {
  const schedule = useSelector((state) => state.schedule.value);
  const date = new Date(year, month);

  const weekDates = eachWeekOfInterval(
    {
      start: date,
      end: new Date(year, month, getDaysInMonth(date)),
    },
    {weekStartsOn: 1}
  );

  return (
    <Box>
      <Stack direction="row">
        {(() => {
          return [0, 1, 2, 3, 4, 5, 6].map((offset) => {
            const offsetDate = addDays(weekDates[0], offset);
            return (
              <Box sx={{width: '100%', textAlign: 'center'}}>{format(offsetDate, 'eeeeee')}</Box>
            );
          });
        })()}
      </Stack>
      {weekDates.map((weekDate) => (
        <React.Fragment>
          <Week schedules={schedules} year={year} month={month} date={weekDate} />
          {(() => {
            const date = parseISO(schedule?.date);
            if (isSameWeek(weekDate, date)) {
              return (
                <Box sx={{border: '1px solid', borderColor: 'primary.main', borderRadius: 1}}>
                  {/* <p>{format(date, 'eeee do MMMM')}</p> */}
                  <p>{schedule.recipe.title}</p>
                  <p>{schedule.recipe.description}</p>
                  <Link to={'/recipe/' + schedule.recipe.slug}></Link>
                </Box>
              );
            }
          })()}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Month;
