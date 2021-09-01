import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import {Button, Box, Grid, Dialog, DialogContent, Stack} from '@material-ui/core';
import Measurements from './measurements';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import {styled} from '@material-ui/system';
import {set} from '../state/peopleSlice';

const Highlight = styled('span')(({theme}) => ({
  color: theme.palette.primary.main,
}));

const GridButton = styled(Button)({
  gridColumn: 'span 2',
  justifyContent: 'flex-start',
});

const MeasurementsList = ({measurements}) => {
  const people = useSelector((state) => state.people.value);
  const dispatch = useDispatch();

  const [basicOpen, setBasicOpen] = useState(false);

  const handlePeopleChange = (p) => {
    if (p < 1) {
      return;
    } else {
      dispatch(set(p));
    }
  };

  const basicMeasurements = measurements.filter((measurement) => !!measurement.product?.basic);
  const nonBasicMeasurements = measurements.filter((measurement) => !measurement.product?.basic);

  const measurementsHalfIndex = Math.round(
    (nonBasicMeasurements.length + (basicMeasurements.length ? 1 : 0)) / 2
  );
  const measurementsFirstHalf = nonBasicMeasurements.slice(0, measurementsHalfIndex);
  const measurementsSecondHalf = nonBasicMeasurements.slice(measurementsHalfIndex);

  return (
    <React.Fragment>
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
      <Box
        sx={{
          display: {xs: 'none', sm: 'block'},
        }}
      >
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <Measurements measurements={measurementsFirstHalf} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Measurements measurements={measurementsSecondHalf}>
              {(() => {
                if (basicMeasurements.length) {
                  return (
                    <GridButton
                      sx={{textTransform: 'none', fontSize: '1em', p: 0}}
                      onClick={() => setBasicOpen(true)}
                    >
                      {basicMeasurements.length} more ...
                    </GridButton>
                  );
                }
              })()}
            </Measurements>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: {xs: 'block', sm: 'none'},
        }}
      >
        <Measurements measurements={nonBasicMeasurements}>
          {(() => {
            if (basicMeasurements.length) {
              return (
                <GridButton
                  sx={{textTransform: 'none', fontSize: '1em', p: 0}}
                  onClick={() => setBasicOpen(true)}
                >
                  {basicMeasurements.length} more ...
                </GridButton>
              );
            }
          })()}
        </Measurements>
      </Box>
      <Dialog open={basicOpen} onClose={() => setBasicOpen(false)}>
        <DialogContent>
          <Measurements measurements={basicMeasurements} />
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default MeasurementsList;
