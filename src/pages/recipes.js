import * as React from 'react';
import {graphql} from 'gatsby';
import {Helmet} from 'react-helmet';
import MeasurementsList from '../components/measurementsList';
import Parts from '../components/parts';
import PartFragment from '../components/fragments/partFragment';
import MeasurementFragment from '../components/fragments/measurementFragment';
import ProductFragment from '../components/fragments/productFragment';
import ActionFragment from '../components/fragments/actionFragment';

const RecipesPage = ({data}) => {
  return (
    <React.Fragment>
      <ProductFragment />
      <MeasurementFragment />
      <ActionFragment />
      <PartFragment />
      <Helmet>
        <title>Recipes | Daily Food</title>
      </Helmet>
      <main>
        <h1>{data.server.getRecipe.title}</h1>
        <p>{data.server.getRecipe.description}</p>
        <MeasurementsList measurements={data.server.getRecipe.measurements} />
        {/* {JSON.stringify(data.server.getRecipe.parts)} */}
        <Parts parts={data.server.getRecipe.parts} />
      </main>
    </React.Fragment>
  );
};

export const query = graphql`
  query RecipeQuery {
    server {
      getRecipe(id: "0x4e71") {
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

export default RecipesPage;
