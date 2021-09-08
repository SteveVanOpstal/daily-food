import React, {useState} from 'react';
import {Button, Box, Grid, Dialog, DialogContent} from '@material-ui/core';
import Measurements from './measurements';
import {styled} from '@material-ui/system';

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
                    <GridButton>
                      <Button
                        sx={{textTransform: 'none', fontSize: '1em', p: 0}}
                        onClick={() => setBasicOpen(true)}
                      >
                        {basicMeasurements.length} more ...
                      </Button>
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
                <GridButton>
                  <Button
                    sx={{textTransform: 'none', fontSize: '1em', p: 0}}
                    onClick={() => setBasicOpen(true)}
                  >
                    {basicMeasurements.length} more ...
                  </Button>
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
