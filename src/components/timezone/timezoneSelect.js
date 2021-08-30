import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemButton from '@material-ui/core/ListItemButton';
import ScheduleIcon from '@material-ui/icons/Schedule';

import spacetime from 'spacetime';
import informal from 'spacetime-informal';

export const i18nTimezones = [
  {
    key: 'Pacific/Midway',
    label: 'Midway Island, Samoa',
  },
  {
    key: 'Pacific/Honolulu',
    label: 'Hawaii',
  },
  {
    key: 'America/Juneau',
    label: 'Alaska',
  },
  {
    key: 'America/Boise',
    label: 'Mountain Time',
  },
  {
    key: 'America/Dawson',
    label: 'Dawson, Yukon',
  },
  {
    key: 'America/Chihuahua',
    label: 'Chihuahua, La Paz, Mazatlan',
  },
  {
    key: 'America/Phoenix',
    label: 'Arizona',
  },
  {
    key: 'America/Chicago',
    label: 'Central Time',
  },
  {
    key: 'America/Regina',
    label: 'Saskatchewan',
  },
  {
    key: 'America/Mexico_City',
    label: 'Guadalajara, Mexico City, Monterrey',
  },
  {
    key: 'America/Belize',
    label: 'Central America',
  },
  {
    key: 'America/Detroit',
    label: 'Eastern Time',
  },
  {
    key: 'America/Bogota',
    label: 'Bogota, Lima, Quito',
  },
  {
    key: 'America/Caracas',
    label: 'Caracas, La Paz',
  },
  {
    key: 'America/Santiago',
    label: 'Santiago',
  },
  {
    key: 'America/St_Johns',
    label: 'Newfoundland and Labrador',
  },
  {
    key: 'America/Sao_Paulo',
    label: 'Brasilia',
  },
  {
    key: 'America/Tijuana',
    label: 'Tijuana',
  },
  {
    key: 'America/Argentina/Buenos_Aires',
    label: 'Buenos Aires, Georgetown',
  },
  {
    key: 'America/Nuuk',
    label: 'Greenland',
  },
  {
    key: 'America/Los_Angeles',
    label: 'Pacific Time',
  },
  {
    key: 'Atlantic/Azores',
    label: 'Azores',
  },
  {
    key: 'Atlantic/Cape_Verde',
    label: 'Cape Verde Islands',
  },
  {
    key: 'GMT',
    label: 'GMT',
  },
  {
    key: 'Europe/London',
    label: 'Edinburgh, London',
  },
  {
    key: 'Europe/Dublin',
    label: 'Dublin',
  },
  {
    key: 'Europe/Lisbon',
    label: 'Lisbon',
  },
  {
    key: 'Africa/Casablanca',
    label: 'Casablanca, Monrovia',
  },
  {
    key: 'Atlantic/Canary',
    label: 'Canary Islands',
  },
  {
    key: 'Europe/Belgrade',
    label: 'Belgrade, Bratislava, Budapest, Ljubljana, Prague',
  },
  {
    key: 'Europe/Sarajevo',
    label: 'Sarajevo, Skopje, Warsaw, Zagreb',
  },
  {
    key: 'Europe/Brussels',
    label: 'Brussels, Copenhagen, Madrid, Paris',
  },
  {
    key: 'Europe/Amsterdam',
    label: 'Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna',
  },
  {
    key: 'Africa/Algiers',
    label: 'West Central Africa',
  },
  {
    key: 'Europe/Bucharest',
    label: 'Bucharest',
  },
  {
    key: 'Africa/Cairo',
    label: 'Cairo',
  },
  {
    key: 'Europe/Helsinki',
    label: 'Helsinki, Kiev, Riga, Sofia, Tallinn, Vilnius',
  },
  {
    key: 'Europe/Athens',
    label: 'Athens, Istanbul, Minsk',
  },
  {
    key: 'Asia/Jerusalem',
    label: 'Jerusalem',
  },
  {
    key: 'Africa/Harare',
    label: 'Harare, Pretoria',
  },
  {
    key: 'Europe/Moscow',
    label: 'Moscow, St. Petersburg, Volgograd',
  },
  {
    key: 'Asia/Kuwait',
    label: 'Kuwait, Riyadh',
  },
  {
    key: 'Africa/Nairobi',
    label: 'Nairobi',
  },
  {
    key: 'Asia/Baghdad',
    label: 'Baghdad',
  },
  {
    key: 'Asia/Tehran',
    label: 'Tehran',
  },
  {
    key: 'Asia/Dubai',
    label: 'Abu Dhabi, Muscat',
  },
  {
    key: 'Asia/Baku',
    label: 'Baku, Tbilisi, Yerevan',
  },
  {
    key: 'Asia/Kabul',
    label: 'Kabul',
  },
  {
    key: 'Asia/Yekaterinburg',
    label: 'Ekaterinburg',
  },
  {
    key: 'Asia/Karachi',
    label: 'Islamabad, Karachi, Tashkent',
  },
  {
    key: 'Asia/Kolkata',
    label: 'Chennai, Kolkata, Mumbai, New Delhi',
  },
  {
    key: 'Asia/Kathmandu',
    label: 'Kathmandu',
  },
  {
    key: 'Asia/Dhaka',
    label: 'Astana, Dhaka',
  },
  {
    key: 'Asia/Colombo',
    label: 'Sri Jayawardenepura',
  },
  {
    key: 'Asia/Almaty',
    label: 'Almaty, Novosibirsk',
  },
  {
    key: 'Asia/Rangoon',
    label: 'Yangon Rangoon',
  },
  {
    key: 'Asia/Bangkok',
    label: 'Bangkok, Hanoi, Jakarta',
  },
  {
    key: 'Asia/Krasnoyarsk',
    label: 'Krasnoyarsk',
  },
  {
    key: 'Asia/Shanghai',
    label: 'Beijing, Chongqing, Hong Kong SAR, Urumqi',
  },
  {
    key: 'Asia/Kuala_Lumpur',
    label: 'Kuala Lumpur, Singapore',
  },
  {
    key: 'Asia/Taipei',
    label: 'Taipei',
  },
  {
    key: 'Australia/Perth',
    label: 'Perth',
  },
  {
    key: 'Asia/Irkutsk',
    label: 'Irkutsk, Ulaanbaatar',
  },
  {
    key: 'Asia/Seoul',
    label: 'Seoul',
  },
  {
    key: 'Asia/Tokyo',
    label: 'Osaka, Sapporo, Tokyo',
  },
  {
    key: 'Asia/Yakutsk',
    label: 'Yakutsk',
  },
  {
    key: 'Australia/Darwin',
    label: 'Darwin',
  },
  {
    key: 'Australia/Adelaide',
    label: 'Adelaide',
  },
  {
    key: 'Australia/Sydney',
    label: 'Canberra, Melbourne, Sydney',
  },
  {
    key: 'Australia/Brisbane',
    label: 'Brisbane',
  },
  {
    key: 'Australia/Hobart',
    label: 'Hobart',
  },
  {
    key: 'Asia/Vladivostok',
    label: 'Vladivostok',
  },
  {
    key: 'Pacific/Guam',
    label: 'Guam, Port Moresby',
  },
  {
    key: 'Asia/Magadan',
    label: 'Magadan, Solomon Islands, New Caledonia',
  },
  {
    key: 'Asia/Kamchatka',
    label: 'Kamchatka, Marshall Islands',
  },
  {
    key: 'Pacific/Fiji',
    label: 'Fiji Islands',
  },
  {
    key: 'Pacific/Auckland',
    label: 'Auckland, Wellington',
  },
  {
    key: 'Pacific/Tongatapu',
    label: "Nuku'alofa",
  },
];

const timezones = i18nTimezones
  .map((timezone) => {
    const now = spacetime.now(timezone.key);
    const display = informal.display(timezone.key);
    const abbrev = now.isDST() ? display?.daylight?.abbrev : display?.standard?.abbrev;
    return {
      ...timezone,
      offset: now.timezone().current.offset,
      abbrev: abbrev === timezone.key || abbrev === 'etc/Gmt' ? undefined : abbrev,
    };
  })
  .sort((timezone1, timezone2) => {
    if (timezone1.offset === timezone2.offset) {
      return 0;
    }
    return timezone1.offset > timezone2.offset ? 1 : -1;
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
      <span>
        {currentTime.time()}
        <Button onClick={() => setOpen(true)}>
          {selectedTimezone.abbrev || selectedTimezone.label}
        </Button>
      </span>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogContent>
          <FormControl>
            <List native input={<OutlinedInput label="Timezone" />}>
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
