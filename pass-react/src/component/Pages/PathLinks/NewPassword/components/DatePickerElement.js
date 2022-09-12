import React from 'react';

import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Stack, TextField} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";


const DatePickerElement = (props) => {
    const {style} = props;
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const handleDateChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={style}>
                <DesktopDatePicker
                    label="Creation date"
                    inputFormat="DD/MM/YYYY"
                    value={value}
                    onChange={handleDateChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default DatePickerElement;