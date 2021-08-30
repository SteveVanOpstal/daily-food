import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {set} from '../../state/systemSlice';
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup';
import ToggleButton from '@material-ui/core/ToggleButton';
import StraightenIcon from '@material-ui/icons/Straighten';
import SvgIcon from '@material-ui/core/SvgIcon';

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

  return (
    <ToggleButtonGroup
      value={system}
      exclusive
      onChange={(event, value) => dispatch(set(value))}
      aria-label="system of measurement"
    >
      <ToggleButton value="metric" aria-label="metric">
        <StraightenIcon color="primary" />
      </ToggleButton>
      <ToggleButton value="imperial" aria-label="imperial">
        <CrownIcon color="primary" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default SystemSelect;