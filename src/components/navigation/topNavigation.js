import * as React from 'react';
import {Link} from 'gatsby';
import {styled} from '@material-ui/system';

const NavItem = styled('li')(({theme}) => ({
  padding: theme.spacing(3),
  listStyleType: 'none',
  fontSize: '2rem',
}));

const Today = styled(NavItem)({
  fontSize: '3rem',
});

const StyledLink = styled(Link)(({theme}) => ({
  color: theme.palette.text.primary,
  ':hover': {
    color: theme.palette.primary.main,
  },
  '&.active': {
    color: theme.palette.primary.main,
  },
}));

const TopNavigation = () => {
  return (
    <nav>
      <ul style={{display: 'flex'}}>
        <NavItem>
          <StyledLink activeClassName="active" to="/history">
            History
          </StyledLink>
        </NavItem>
        <Today>
          <StyledLink activeClassName="active" to="/">
            Today
          </StyledLink>
        </Today>
        <NavItem>
          <StyledLink activeClassName="active" to="/recipes">
            All Recipes
          </StyledLink>
        </NavItem>
      </ul>
    </nav>
  );
};

export default TopNavigation;
