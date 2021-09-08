import * as React from 'react';
import {Helmet} from 'react-helmet';
import {graphql} from 'gatsby';
import PartFragment from '../components/fragments/partFragment';
import MeasurementFragment from '../components/fragments/measurementFragment';
import ProductFragment from '../components/fragments/productFragment';
import ActionFragment from '../components/fragments/actionFragment';
import Recipe from '../pages/recipe';

const RecipeTemplate = ({data}) => {
  return (
    <React.Fragment>
      <ProductFragment />
      <MeasurementFragment />
      <ActionFragment />
      <PartFragment />
      <Helmet>
        <title>{data.server.getRecipe.title} | Daily Food</title>
      </Helmet>
      <Recipe recipe={data.server.getRecipe} />
    </React.Fragment>
  );
};

export const query = graphql`
  query ($id: ID!) {
    server {
      getRecipe(id: $id) {
        slug
        title
        description
        measurements {
          ...MeasurementFragment
          product {
            ...ProductFragment
            measurements {
              ...MeasurementFragment
              product {
                ...ProductFragment
              }
            }
          }
        }
        parts {
          ...PartFragment
          related {
            ...PartFragment
          }
        }
        draft
      }
    }
  }
`;

export default RecipeTemplate;
