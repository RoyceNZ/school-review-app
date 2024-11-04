import React from 'react';

import { styled } from '@mui/system';
import Fab from '@mui/material/Fab';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = styled((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    fabContainer: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

const SearchSuggestions = () => {
    const classes = useStyles();

    return (
        <div className={classes.fabContainer}>
            <Tooltip title="Add" aria-label="add">
                <Fab color="primary" variant='extended' aria-label="add" className={classes.fab}>
                    <AddIcon />
                    Add
                </Fab>
            </Tooltip>
            <Tooltip title="Search" aria-label="search">
                <Fab color="secondary" variant='extended' aria-label="search" className={classes.fab}>
                    <SearchIcon />
                </Fab>
            </Tooltip>
            <Tooltip title="Edit" aria-label="edit">
                <Fab color="default" variant='extended' aria-label="edit" className={classes.fab}>
                    <EditIcon />
                </Fab>
            </Tooltip>
            <Tooltip title="Delete" aria-label="delete">
                <Fab color="secondary" variant='extended' aria-label="delete" className={classes.fab}>
                    <DeleteIcon />
                </Fab>
            </Tooltip>
        </div>
    );
};

export default SearchSuggestions;