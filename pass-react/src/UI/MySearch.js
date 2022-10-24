import * as React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";

import {filterActions} from "../store/state/filter/filter-slice";
import {delay} from "../utils/Constants";
import {isSearchable} from "../utils/UrlUtils";

import {alpha, styled} from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import {InputAdornment} from "@mui/material";
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const MySearch = () => {
    const {pathname} = useLocation();
    const [searchTerm, setSearchTerm] = React.useState('');

    const {hasSearch} = useSelector(state => state.filter.search);
    const onSearchChange = (searchString) => dispatch(filterActions.changeSearch(searchString));

    const dispatch = useDispatch();

    let _hidden = isSearchable(pathname)
        ? null
        : {display:'none'};

    useEffect(() => {
        const identifier = setTimeout(() => {
            onSearchChange(searchTerm);
        }, delay.search)

        return () => clearTimeout(identifier)
    }, [searchTerm])

    let endAdornment = () => '';
    if (hasSearch) {
        endAdornment = () =>
            <InputAdornment position="end">
                <IconButton onClick={() => setSearchTerm('')}>
                    <ClearTwoToneIcon fontSize="small"/>
                </IconButton>
            </InputAdornment>;
    }


    return (
        <Search sx={_hidden}>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                onChange={event => setSearchTerm(event.target.value)}
                value={searchTerm}
                endAdornment={endAdornment()}
                // inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
    );
};

export default MySearch;