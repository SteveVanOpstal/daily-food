import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import {IconButton, Stack, styled, Tooltip} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {set} from '../../state/peopleSlice';

const Highlight = styled('span')(({theme}) => ({
  color: theme.palette.primary.main,
}));

const PeopleSelect = () => {
  const people = useSelector((state) => state.people.value);
  const dispatch = useDispatch();

  const handlePeopleChange = (p) => {
    if (p < 1) {
      return;
    } else {
      dispatch(set(p));
    }
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Stack alignItems="center" sx={{displayPrint: 'none', display: 'inline-flex'}}>
        <IconButton sx={{p: 0}} onClick={() => handlePeopleChange(people + 1)}>
          <AddCircleOutlineIcon color="primary" />
        </IconButton>
        <Tooltip title={`serves ${people} ${people <= 1 ? 'person' : 'people'}`} placement="left">
          <Highlight sx={{lineHeight: '32px'}}>{people}</Highlight>
        </Tooltip>
        <IconButton sx={{p: 0}} onClick={() => handlePeopleChange(people - 1)}>
          <RemoveCircleOutlineIcon color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default PeopleSelect;
