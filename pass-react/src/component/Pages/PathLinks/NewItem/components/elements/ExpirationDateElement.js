import React from 'react';

import dayjs from "dayjs";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {Stack, TextField} from "@mui/material";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";


const ExpirationDateElement = (props) => {
    const {value, style, elemRef} = props;
    const [currentValue, setCurrentValue] = React.useState(dayjs(value));
    const handleDateChange = (newValue) => {
        setCurrentValue(newValue);
    };


    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack sx={style}>
                <DesktopDatePicker
                    views={['month', 'year']}
                    label="Expiration date"
                    inputFormat="MM/YY"
                    value={currentValue}
                    renderInput={(params) => <TextField {...params} />}
                    inputRef={elemRef}
                    onChange={handleDateChange}
                />
            </Stack>
        </LocalizationProvider>
    );
};

export default ExpirationDateElement;