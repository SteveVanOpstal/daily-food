import {Box, Drawer} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {close} from '../../state/drawerSlice';
import DarkmodeSwitch from './darkmodeSwitch';
import FontSelect from './fontSelect';
import SystemSelect from './systemSelect';

const Settings = () => {
  const open = useSelector((state) => state.drawer.value);
  const dispatch = useDispatch();

  return (
    <Drawer anchor="bottom" open={open} onClose={() => dispatch(close())}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '1rem',
          m: 2,
          alignItems: 'center',
        }}
      >
        <span>Theme: </span>
        <DarkmodeSwitch />
        <span>System: </span>
        <SystemSelect />
        <span>Font: </span>
        <FontSelect />
      </Box>
    </Drawer>
  );
};

export default Settings;
