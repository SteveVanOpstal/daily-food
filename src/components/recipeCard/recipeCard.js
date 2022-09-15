import * as React from 'react';
import {Card, CardContent} from '@material-ui/core';
import RecipeCardContent from './recipeCardContent';

const RecipeCard = ({recipe}) => {
  return (
    <Card>
      <CardContent>
        <RecipeCardContent recipe={recipe} />
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
