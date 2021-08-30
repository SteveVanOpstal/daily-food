import React from 'react';
import {Helmet} from 'react-helmet';
import Timezone from '../components/timezone/timezone';
import {graphql} from 'gatsby';

const IndexPage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Today | Daily Food</title>
      </Helmet>
      <main>
        <Timezone></Timezone>
        {data.site.siteMetadata.title}
      </main>
    </React.Fragment>
  );
};

export const query = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default IndexPage;
