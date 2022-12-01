import {styled} from '@mui/material';
import {Link} from 'gatsby';
import * as React from 'react';

const Nav = styled('ul')({
  display: 'grid',
  padding: 0,
  gridTemplateColumns: '1fr auto 1fr',
});

const NavItem = styled('li')({
  listStyleType: 'none',
  fontSize: '2em',
});

const Today = styled(NavItem)({
  fontSize: '3em',
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
    <nav style={{margin: '60px 0'}}>
      <Nav
        sx={{
          gap: {
            sm: '2em',
            md: '2.5em',
          },
        }}
      >
        <NavItem sx={{textAlign: 'right'}}>
          <StyledLink activeClassName="active" to="/schedule/">
            Schedule
          </StyledLink>
        </NavItem>
        <Today>
          <StyledLink activeClassName="active" to="/">
            Today
          </StyledLink>
        </Today>
        <NavItem>
          <StyledLink activeClassName="active" to="/recipes/">
            Recipes
          </StyledLink>
        </NavItem>
      </Nav>
    </nav>
  );
};

export default TopNavigation;
