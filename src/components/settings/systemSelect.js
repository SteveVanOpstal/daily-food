import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {set} from '../../state/systemSlice';
import {ToggleButtonGroup, ToggleButton, SvgIcon} from '@material-ui/core';
import StraightenIcon from '@material-ui/icons/Straighten';

function CrownIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
    </SvgIcon>
  );
}

const SystemSelect = () => {
  const system = useSelector((state) => state.system.value);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if (value !== null) {
      dispatch(set(value));
    }
  };

  return (
    <ToggleButtonGroup
      value={system}
      exclusive
      onChange={(event, value) => handleChange(value)}
      aria-label="system of measurement"
    >
      <ToggleButton sx={{gap: '0.3em'}} value="metric" aria-label="metric">
        <StraightenIcon color="primary" />
        <span>Metric</span>
      </ToggleButton>
      <ToggleButton sx={{gap: '0.3em'}} value="imperial" aria-label="imperial">
        <CrownIcon color="primary" />
        <span>Imperial</span>
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SystemSelect;
