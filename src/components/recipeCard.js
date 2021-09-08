import * as React from 'react';
import {Link} from 'gatsby';

const RecipeCard = ({title, description, slug}) => {
  return (
    <Link to={'/recipe/' + slug}>
      {title}
      {description}
    </Link>
  );
};

export default RecipeCard;
