import React from 'react';
import {useDispatch} from 'react-redux';
import {BottomNavigation, BottomNavigationAction, Paper} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import DinnerDiningIcon from '@material-ui/icons/DinnerDining';
import ReceiptLongIcon from '@material-ui/icons/ReceiptLong';
import SettingsIcon from '@material-ui/icons/Settings';
import {navigate} from 'gatsby';
import {toggle} from '../../state/drawerSlice';

const Layout = ({location}) => {
  const [value, setValue] = React.useState(location.pathname);
  const dispatch = useDispatch();

  return (
    <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          if (newValue === 'drawer') {
            dispatch(toggle());
          } else {
            navigate(newValue);
            setValue(newValue);
          }
        }}
        sx={{
          display: {sm: 'none'},
          displayPrint: 'none',
        }}
      >
        <BottomNavigationAction
          sx={{fontSize: 'unset'}}
          value="/schedule"
          label="Schedule"
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
        <BottomNavigationAction
          sx={{fontSize: 'unset'}}
          value="drawer"
          label="Settings"
          icon={<SettingsIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Layout;
