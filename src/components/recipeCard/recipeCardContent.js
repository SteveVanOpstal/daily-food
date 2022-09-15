import * as React from 'react';
import {Link} from 'gatsby';
import {Box, Typography} from '@material-ui/core';

const RecipeCardContent = ({recipe}) => {
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h5" component="div">
        {recipe.title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {recipe.description}
      </Typography>
      <Box sx={{marginTop: '1em'}}>
        <Link to={'/recipe/' + recipe.slug + '/'}>View Recipe</Link>
      </Box>
    </React.Fragment>
  );
};

export default RecipeCardContent;
