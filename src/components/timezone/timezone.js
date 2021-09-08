import React from 'react';
import TimezoneSelect from './timezoneSelect';
import {useStaticQuery, graphql} from 'gatsby';

const Timezone = () => {
  const data = useStaticQuery(graphql`
    query TimezoneQuery {
      site {
        siteMetadata {
          streamStart
        }
      }
    }
  `);

  return (
    <React.Fragment>
      <p>
        Watch the stream today at{' '}
        <TimezoneSelect time={data.site.siteMetadata.streamStart}></TimezoneSelect>
      </p>
      <a href="https://www.twitch.tv/sp4zie">twitch.tv/nice_kok_</a>
    </React.Fragment>
  );
};

export default Timezone;
