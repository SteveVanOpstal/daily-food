import * as React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import {parseISO, format, isThisYear, isToday, isYesterday, isTomorrow} from 'date-fns';
import RecipeCard from '../components/recipeCard';

const SchedulePage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Schedule | Daily Food</title>
      </Helmet>
      <main>
        {(() => {
          if (data.server.querySchedule) {
            return data.server.querySchedule.map((schedule) => {
              const date = parseISO(schedule.date);
              return (
                <React.Fragment key={schedule.id}>
                  {(() => {
                    if (isYesterday(date)) {
                      return 'Yesterday';
                    } else if (isToday(date)) {
                      return 'Today';
                    } else if (isTomorrow(date)) {
                      return 'Tomorrow';
                    } else {
                      return <p>{format(date, 'eeee')}</p>;
                    }
                  })()}
                  <p>{format(date, 'LLLL do' + (isThisYear(date) ? '' : ' u'))}</p>
                  <RecipeCard {...schedule.recipe} />
                </React.Fragment>
              );
            });
          } else {
            return <span>No data</span>;
          }
        })()}
      </main>
    </React.Fragment>
  );
};

export const query = graphql`
  query {
    server {
      querySchedule {
        id
        date
        recipe {
          slug
          title
          description
        }
      }
    }
  }
`;

export default SchedulePage;
