import React from 'react';
import {Button, Drawer} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import DarkmodeSwitch from './darkmodeSwitch';
import SystemSelect from './systemSelect';
import FontSelect from './fontSelect';

const Settings = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>
        <SettingsIcon color="primary" />
      </Button>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <DarkmodeSwitch />
        <SystemSelect />
        <FontSelect />
      </Drawer>
    </React.Fragment>
  );
};

export default Settings;
