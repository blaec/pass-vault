import React from 'react';

import dayjs from "dayjs";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Stack, TextField} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";


const CreationDateElement = (props) => {
    const {value, style, elemRef} = props;
    const [currentValue, setCurrentValue] = React.useState(dayjs(value));
    const handleDateChange = (newValue) => {
        setCurrentValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={style}>
                <DesktopDatePicker
                    label="Creation date"
                    inputFormat="DD/MM/YYYY"
                    value={currentValue}
                    renderInput={(params) => <TextField {...params} />}
                    inputRef={elemRef}
                    onChange={handleDateChange}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default CreationDateElement;