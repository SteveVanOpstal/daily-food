import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import convert from 'convert-units';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemButton from '@material-ui/core/ListItemButton';
import {styled} from '@material-ui/system';
import {EXCLUDED_UNITS} from '../../../../constants';
import {fractions, roundToPrecision} from './amount';
import {setUnit} from '../../../state/unitsSlice';

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
            <List native input={<OutlinedInput label="Timezone" />}>
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
