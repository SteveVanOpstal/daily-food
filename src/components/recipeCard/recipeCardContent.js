import {Box, Typography} from '@mui/material';
import {Link} from 'gatsby';
import * as React from 'react';

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
