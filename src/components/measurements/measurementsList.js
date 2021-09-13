import React, {useState} from 'react';
import {Link} from 'gatsby';
import {Button, Paper, Box, Stack, Grid, Dialog, DialogContent} from '@material-ui/core';
import Measurements from './measurements';
import {styled} from '@material-ui/system';
import PeopleSelect from './peopleSelect';
import Tip from '../tip';

const GridButton = styled('div')({
  gridColumn: 'span 2',
  justifyContent: 'flex-start',
});

const MeasurementsList = ({measurements}) => {
  const [basicOpen, setBasicOpen] = useState(false);

  const basicMeasurements = measurements.filter((measurement) => !!measurement.product?.basic);
  const nonBasicMeasurements = measurements.filter((measurement) => !measurement.product?.basic);

  const measurementsHalfIndex = Math.round(
    (nonBasicMeasurements.length + (basicMeasurements.length ? 1 : 0)) / 2
  );
  const measurementsFirstHalf = nonBasicMeasurements.slice(0, measurementsHalfIndex);
  const measurementsSecondHalf = nonBasicMeasurements.slice(measurementsHalfIndex);

  return (
    <React.Fragment>
      <Stack direction="row" spacing={'1em'}>
        <Paper sx={{p: '1em', width: '100%'}}>
          <Grid sx={{display: {xs: 'none', sm: 'flex'}}} container columnSpacing={'1em'}>
            <Grid item xs={12} sm={6}>
              <Measurements measurements={measurementsFirstHalf} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Measurements measurements={measurementsSecondHalf} />
            </Grid>
          </Grid>
          <Box sx={{display: {xs: 'block', sm: 'none'}}}>
            <Measurements measurements={nonBasicMeasurements} />
          </Box>

          {(() => {
            if (basicMeasurements.length) {
              return (
                <GridButton>
                  <Button
                    sx={{textTransform: 'none', fontSize: '1em', p: 0}}
                    onClick={() => setBasicOpen(true)}
                  >
                    {basicMeasurements.length} more
                  </Button>
                </GridButton>
              );
            }
          })()}
        </Paper>

        <PeopleSelect />
      </Stack>
      <Dialog open={basicOpen} onClose={() => setBasicOpen(false)}>
        <DialogContent>
          <Box sx={{marginBottom: '1em'}}>
            <Measurements measurements={basicMeasurements} />
          </Box>
          <Tip title="Basic products" description="">
            <span>
              some products are 'hidden' as I percieve them as being 'basic' products a kitchen
              should always be stocked with. For a full list see:
            </span>{' '}
            <Link to="/basic-products">Basic products</Link>
          </Tip>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default MeasurementsList;
