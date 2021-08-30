import * as React from 'react';
import {Helmet} from 'react-helmet';

const RecipePage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{/*recipe.title*/} | Daily Food</title>
      </Helmet>
      <main></main>
    </React.Fragment>
  );
};

export default RecipePage;
