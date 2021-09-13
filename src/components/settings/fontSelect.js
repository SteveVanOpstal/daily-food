import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {set} from '../../state/fontSlice';
import {ToggleButton, ToggleButtonGroup} from '@material-ui/core';

const FontSelect = () => {
  const font = useSelector((state) => state.font.value);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    if (value !== null) {
      dispatch(set(value));
    }
  };

  return (
    <ToggleButtonGroup
      value={font}
      exclusive
      onChange={(event, value) => handleChange(value)}
      aria-label=""
    >
      <ToggleButton value="marker" aria-label="">
        Marker
      </ToggleButton>
      <ToggleButton value="cursive" aria-label="">
        Cursive
      </ToggleButton>
      <ToggleButton value="sans" aria-label="">
        Sans
      </ToggleButton>
      {/* <ToggleButton value="Allison" aria-label="">
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
      </ToggleButton> */}
    </ToggleButtonGroup>
  );
};

export default FontSelect;
