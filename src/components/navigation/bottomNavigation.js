import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Paper from '@material-ui/core/Paper';
import RestoreIcon from '@material-ui/icons/Restore';
import DinnerDiningIcon from '@material-ui/icons/DinnerDining';
import ReceiptLongIcon from '@material-ui/icons/ReceiptLong';
import {navigate} from 'gatsby';

const Layout = ({location, theme}) => {
  const [value, setValue] = React.useState(location.pathname);

  return (
    <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          navigate(newValue);
          setValue(newValue);
        }}
        sx={{
          display: {sm: 'none'},
          displayPrint: 'none',
          backgroundColor: theme.backgroundColor,
        }}
      >
        <BottomNavigationAction
          sx={{fontSize: 'unset'}}
          value="/history"
          label="History"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction
          sx={{fontSize: 'unset'}}
          value="/"
          label="Today"
          icon={<DinnerDiningIcon />}
        />
        <BottomNavigationAction
          sx={{fontSize: 'unset'}}
          value="/recipes"
          label="Recipes"
          icon={<ReceiptLongIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Layout;
