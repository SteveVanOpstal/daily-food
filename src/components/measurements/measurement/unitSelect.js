import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  List,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  styled,
} from '@mui/material';
import convert from 'convert-units';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {EXCLUDED_UNITS} from '../../../../constants';
import {setUnit} from '../../../state/unitsSlice';
import {fractions, roundToPrecision} from './amount';

const UnitButton = styled(Button)({
  fontSize: '1em',
  minWidth: 0,
  padding: 0,
  textTransform: 'none',
  verticalAlign: 'unset',
  lineHeight: '1em',
});

function getPossibleUnits(unit, system) {
  const possibilities = convert().from(unit).possibilities();
  return convert()
    .list()
    .filter(
      (i) =>
        i.system === system && possibilities.includes(i.abbr) && !EXCLUDED_UNITS.includes(i.abbr)
    );
}

const UnitSelect = (props) => {
  const system = useSelector((state) => state.system.value);
  const stateUnit = useSelector((state) => state.units.value[props.id]);
  const [selectedUnit, setSelectedUnit] = React.useState(props.unit);
  const [open, setOpen] = React.useState(false);
  const [possibleUnits, setPossibleUnits] = React.useState([]);

  const dispatch = useDispatch();

  const handleUnitClick = (unit) => {
    setSelectedUnit(unit);
    setOpen(false);
    dispatch(setUnit({id: props.id, unit}));
  };

  const handleOpen = () => {
    setPossibleUnits(getPossibleUnits(stateUnit || selectedUnit, system));
    setOpen(true);
  };

  return (
    <React.Fragment>
      <span>
        {fractions(
          roundToPrecision(
            convert(props.val)
              .from(props.unit)
              .to(stateUnit || selectedUnit),
            3
          )
        )}
      </span>
      <UnitButton onClick={handleOpen}>{stateUnit || selectedUnit}</UnitButton>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <FormControl>
            <List input={<OutlinedInput label="Timezone" />}>
              {possibleUnits.map((unit) => (
                <ListItemButton
                  key={unit.abbr}
                  selected={unit.abbr === (stateUnit || selectedUnit).abbr}
                  onClick={() => handleUnitClick(unit.abbr)}
                >
                  <ListItemText primary={unit.abbr} secondary={unit.plural} />
                </ListItemButton>
              ))}
            </List>
          </FormControl>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default UnitSelect;
