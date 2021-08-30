import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {set} from '../../state/fontSlice';
import ToggleButtonGroup from '@material-ui/core/ToggleButtonGroup';
import ToggleButton from '@material-ui/core/ToggleButton';

const FontSelect = () => {
  const font = useSelector((state) => state.font.value);
  const dispatch = useDispatch();

  return (
    <ToggleButtonGroup
      value={font}
      exclusive
      onChange={(event, value) => dispatch(set(value))}
      aria-label=""
      orientation="vertical"
    >
      <ToggleButton value="cursive" aria-label="">
        Cursive
      </ToggleButton>
      <ToggleButton value="clean" aria-label="">
        Clean
      </ToggleButton>
      <ToggleButton value="marker" aria-label="">
        Marker
      </ToggleButton>
      <ToggleButton value="Allison" aria-label="">
        Allison
      </ToggleButton>
      <ToggleButton value="Amatic SC" aria-label="">
        Amatic SC
      </ToggleButton>
      <ToggleButton value="Annie Use Your Telescope" aria-label="">
        Annie Use Your Telescope
      </ToggleButton>
      <ToggleButton value="Give You Glory" aria-label="">
        Give You Glory
      </ToggleButton>
      <ToggleButton value="Montserrat" aria-label="">
        Montserrat
      </ToggleButton>
      <ToggleButton value="Open Sans" aria-label="">
        Open Sans
      </ToggleButton>
      <ToggleButton value="Permanent Marker" aria-label="">
        Permanent Marker
      </ToggleButton>
      <ToggleButton value="Poppins" aria-label="">
        Poppins
      </ToggleButton>
      <ToggleButton value="Sue Ellen Francisco" aria-label="">
        Sue Ellen Francisco
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default FontSelect;
