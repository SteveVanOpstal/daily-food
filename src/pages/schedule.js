import * as React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import Schedule from '../components/schedule/schedule';

const SchedulePage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Schedule | Daily Food</title>
      </Helmet>
      <main>
        {(() => {
          if (data.server.querySchedule.length) {
            return <Schedule schedules={data.server.querySchedule} />;
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
