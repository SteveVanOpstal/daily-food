import DinnerDiningIcon from '@mui/icons-material/DinnerDining';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingsIcon from '@mui/icons-material/Settings';
import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import {navigate} from 'gatsby';
import React from 'react';
import {useDispatch} from 'react-redux';

import {toggle} from '../../state/drawerSlice';

const BottomNav = ({location}) => {
  const [value, setValue] = React.useState(location.pathname);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          display: {sm: 'none'},
          displayPrint: 'none',
        }}
        elevation={3}
      >
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
      <SettingsIcon onClick={() => dispatch(toggle())} />
    </React.Fragment>
  );
};

export default BottomNav;
