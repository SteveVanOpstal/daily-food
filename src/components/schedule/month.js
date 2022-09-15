import * as React from 'react';
import {useSelector} from 'react-redux';
import {Box, Stack} from '@material-ui/core';
import {format, getDaysInMonth, eachWeekOfInterval, addDays, isSameWeek, parseISO} from 'date-fns';
import Week from './week';
import RecipeCardContent from '../recipeCard/recipeCardContent';

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
    <Box sx={{width: '100%'}}>
      <Stack direction="row">
        {(() => {
          return [0, 1, 2, 3, 4, 5, 6].map((offset) => {
            const offsetDate = addDays(weekDates[0], offset);
            return (
              <Box key={offset} sx={{width: '100%', textAlign: 'center'}}>
                {format(offsetDate, 'eeeeee')}
              </Box>
            );
          });
        })()}
      </Stack>
      {weekDates.map((weekDate) => (
        <React.Fragment key={weekDate}>
          <Week schedules={schedules} year={year} month={month} date={weekDate} />
          {(() => {
            const date = parseISO(schedule?.date);
            if (isSameWeek(weekDate, date)) {
              return (
                <Box sx={{margin: '1.5em'}}>
                  <RecipeCardContent recipe={schedule.recipe} />
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
