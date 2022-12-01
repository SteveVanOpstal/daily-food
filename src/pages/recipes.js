import {Grid} from '@mui/material';
import {graphql} from 'gatsby';
import * as React from 'react';
import {Helmet} from 'react-helmet';

import RecipeCard from '../components/recipeCard/recipeCard';

const RecipesPage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Recipes | Daily Food</title>
      </Helmet>
      <main>
        {(() => {
          if (data.server.queryRecipe) {
            return (
              <Grid container>
                {data.server.queryRecipe.map((recipe) => (
                  <Grid key={recipe.id} item xs={12} sm={6} md={4}>
                    <RecipeCard recipe={recipe} />
                  </Grid>
                ))}
              </Grid>
            );
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
      queryRecipe {
        id
        slug
        title
        description
      }
    }
  }
`;

export default RecipesPage;
