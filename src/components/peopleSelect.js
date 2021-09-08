import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {IconButton, Stack} from '@material-ui/core';
import {styled} from '@material-ui/system';
import {set} from '../state/peopleSlice';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

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
      <span>serves:</span>
      <Stack alignItems="center" sx={{displayPrint: 'none', display: 'inline-flex'}}>
        <IconButton sx={{p: 0}} onClick={() => handlePeopleChange(people + 1)}>
          <AddCircleOutlineIcon color="primary" />
        </IconButton>
        <Highlight>{people}</Highlight>
        <IconButton sx={{p: 0}} onClick={() => handlePeopleChange(people - 1)}>
          <RemoveCircleOutlineIcon color="primary" />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default PeopleSelect;
