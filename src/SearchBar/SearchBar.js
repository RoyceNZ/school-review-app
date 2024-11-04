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
    return (
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', paddingTop: '1rem' }}>
            <Button disabled>Age</Button>
            <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={ageGroups}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
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
            {option.title}
          </li>
        );
      }}
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Select Age Group"/>
      )}
    />
            <Button disabled>Area</Button>
            <LocationSearch />

        <Button variant="contained" style={{marginLeft: '10px'}} size="large" endIcon={<SearchIcon />}>Search</Button>
        </div>
    );
}

const ageGroups = [
    { title: 'Nursery' },
    { title: 'Primary' },
    { title: 'Secondary' },
    { title: 'Sixth Form' },
];
// change this for an api of all schools
// const allSchools = [
//     { title: 'The American School', location: 'Washington' },
//     { title: 'The British School', location: 'London' },
//     { title: 'The French School', location: 'Paris' },
//     { title: 'The German School', location: 'Berlin' },
//     { title: 'The Kenyan School', location: 'Nairobi' },
//     { title: 'The Ugandan School', location: 'Kampala' },
//     { title: 'The Tanzanian School', location: 'Dodoma' },
//     { title: 'The Rwandese School', location: 'Kigali' },
// ];

// <Button disabled>Schools</Button>
// <Autocomplete
//     multiple
//     id="tags-outlined"
//     options={allSchools}
//     getOptionLabel={(option) => option.title}
//     filterSelectedOptions
//     style={{ flexGrow: 1, marginLeft: '10px' }}
//     renderInput={(params) => (
//         <TextField
//             {...params}
//             label="Select school"
//             placeholder="Favorites"
//         />
//     )}
// />

// change this for an api of all areas
const areas = [
    { title: 'Washington' },
    { title: 'London' },
    { title: 'Paris' },
    { title: 'Berlin' },
    { title: 'Nairobi' },
    { title: 'Kampala' },
    { title: 'Dodoma' },
    { title: 'Kigali' },
];

export default SearchBar;