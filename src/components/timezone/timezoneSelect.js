import ScheduleIcon from '@mui/icons-material/Schedule';
import {
  Button,
  Dialog,
  DialogContent,
  FormControl,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  OutlinedInput,
  styled,
} from '@mui/material';
import React, {useState} from 'react';
import spacetime from 'spacetime';

import timezones from '../../../timezones.json';

const Span = styled('span')({
  whiteSpace: 'nowrap',
});

const TimezoneSelect = (props) => {
  const defaultTimezoneName = spacetime.now().timezone().name;
  const GmtTimezone = timezones.find((timezone) => timezone.key === 'GMT');
  const defaultTimezone = timezones.find((timezone) => timezone.key === defaultTimezoneName);

  const time = spacetime().goto('Europe/Brussels').time(props.time);

  const [selectedTimezone, setSelectedTimezone] = useState(defaultTimezone || GmtTimezone);
  const [currentTime, setCurrentTime] = useState(time);
  const [open, setOpen] = React.useState(false);

  const handleTimezoneClick = (timezone) => {
    setSelectedTimezone(timezone);
    setCurrentTime(currentTime.goto(timezone.key));
    setOpen(false);
  };

  const offsetToString = (offset) => {
    if (offset > 0) {
      return `+${offset}`;
    } else if (offset < 0) {
      return offset.toString();
    } else {
      return '';
    }
  };

  return (
    <React.Fragment>
      <Span>
        {currentTime.time()}
        <Button sx={{p: '0 0.25em', minWidth: 0}} onClick={() => setOpen(true)}>
          {selectedTimezone.abbrev || selectedTimezone.label}
        </Button>
      </Span>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <FormControl>
            <List input={<OutlinedInput label="Timezone" />}>
              {timezones.map((timezone) => (
                <ListItemButton
                  key={timezone.key}
                  selected={timezone.key === selectedTimezone.key}
                  onClick={() => handleTimezoneClick(timezone)}
                >
                  <ListItemIcon>
                    {timezone.offset === 0 && <ScheduleIcon />}
                    {timezone.offset !== 0 && <p>{offsetToString(timezone.offset)}</p>}
                  </ListItemIcon>

                  <ListItemText primary={timezone.label} secondary={timezone.abbrev} />
                </ListItemButton>
              ))}
            </List>
          </FormControl>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default TimezoneSelect;
