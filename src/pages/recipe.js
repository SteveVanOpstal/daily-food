import * as React from 'react';
import MeasurementsList from '../components/measurements/measurementsList';
import Parts from '../components/parts/parts';

const Recipe = ({recipe}) => {
  return (
    <React.Fragment>
      <main>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <MeasurementsList measurements={recipe.measurements} />
        <Parts parts={recipe.parts} />
      </main>
    </React.Fragment>
  );
};

export default Recipe;
