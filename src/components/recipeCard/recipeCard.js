import {Card, CardContent} from '@mui/material';
import * as React from 'react';

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
