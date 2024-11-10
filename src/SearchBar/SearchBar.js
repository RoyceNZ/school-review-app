import * as React from "react";
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';
import LocationSearch from './LocationSearch/LocationSearch'; 

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function SearchBar() {
    const handleSearchClick = () => {
      window.location.href = '/schools';
    };

    return (
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', paddingTop: '1rem' }}>
        <Button disabled>Level</Button>
        <Autocomplete
          multiple
          id="checkboxes-tags-demo"
          options={ageGroups}
          disableCloseOnSelect
          getOptionLabel={(option) => option.Benamning}
          renderOption={(props, option, { selected }) => {
            const { key, ...optionProps } = props;
            return (
              <li key={key} {...optionProps}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.Benamning}
              </li>
            );
          }}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select Level" />
          )}
        />
        <Button disabled>Area</Button>
        <LocationSearch />
        <Button
          variant="contained"
          style={{ marginLeft: '10px' }}
          size="large"
          endIcon={<SearchIcon />}
          onClick={handleSearchClick}
        >
          Search
        </Button>
      </div>
    );
}

const ageGroups =  [
  {
    "Benamning": "Gymnasieskola",
    "SkolformID": 1,
    "SkolformKod": null
  },
  {
    "Benamning": "Kommunal vuxenutbildning som anpassad utbildning",
    "SkolformID": 2,
    "SkolformKod": null
  },
  {
    "Benamning": "Kommunal vuxenutbildning",
    "SkolformID": 4,
    "SkolformKod": null
  },
  {
    "Benamning": "Grundskola",
    "SkolformID": 5,
    "SkolformKod": null
  },
  {
    "Benamning": "Förskoleklass",
    "SkolformID": 6,
    "SkolformKod": null
  },
  {
    "Benamning": "Fritidshem",
    "SkolformID": 7,
    "SkolformKod": null
  },
  {
    "Benamning": "Anpassad grundskola",
    "SkolformID": 8,
    "SkolformKod": null
  },
  {
    "Benamning": "Öppen fritidsverksamhet",
    "SkolformID": 9,
    "SkolformKod": null
  },
  {
    "Benamning": "Öppen förskola",
    "SkolformID": 11,
    "SkolformKod": null
  },
  {
    "Benamning": "Specialskola",
    "SkolformID": 12,
    "SkolformKod": null
  },
  {
    "Benamning": "Kommunal vuxenutbildning i svenska för invandrare",
    "SkolformID": 13,
    "SkolformKod": null
  },
  {
    "Benamning": "Central insamlingsenhet",
    "SkolformID": 14,
    "SkolformKod": null
  },
  {
    "Benamning": "Sameskola",
    "SkolformID": 15,
    "SkolformKod": null
  },
  {
    "Benamning": "Anpassad gymnasieskola",
    "SkolformID": 3,
    "SkolformKod": null
  }
];


export default SearchBar;