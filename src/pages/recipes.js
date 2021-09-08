import * as React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import RecipeCard from '../components/recipeCard';

const RecipesPage = ({data}) => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Recipes | Daily Food</title>
      </Helmet>
      <main>
        {(() => {
          if (data.server.queryRecipe) {
            return data.server.queryRecipe.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ));
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
