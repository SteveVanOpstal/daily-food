import * as React from 'react';
import {Link} from 'gatsby';
import {styled} from '@material-ui/system';

const Nav = styled('ul')(({theme}) => ({
  display: 'grid',
  padding: 0,
  gridTemplateColumns: '1fr auto 1fr',
  gap: '3em',
}));

const NavItem = styled('li')(({theme}) => ({
  listStyleType: 'none',
  fontSize: '2em',
}));

const Today = styled(NavItem)(({theme}) => ({
  fontSize: '3em',
}));

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
    <nav style={{margin: '60px 0'}}>
      <Nav>
        <NavItem sx={{textAlign: 'right'}}>
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
            Recipes
          </StyledLink>
        </NavItem>
      </Nav>
    </nav>
  );
};

export default TopNavigation;
