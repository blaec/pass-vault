import React from 'react';
import Box from "@mui/material/Box";

const isNumber = (char) => {
    return /^\d$/.test(char);
}

const isLatin = (char) => {
    return /^[a-zA-Z]+$/.test(char);
}

const ColorizedPass = (props) => {
    const {pass} = props;

    let colorMessage = [];
    const colorScheme = [
        {color: 'red'},
        {color: 'green'},
        {color: 'blue'},
    ]
    const inline = {display: 'inline'};

    for (let i = 0; i < pass.length; i++) {
        let currentColor = isNumber(pass[i])
            ? 0
            : isLatin(pass[i]) ? 1 : 2;

        colorMessage[i] = (
            <Box key={i} sx={[colorScheme[currentColor], inline]}>
                {pass[i]}
            </Box>
        );
    }

    return (
        <>
            {colorMessage}
        </>
    );
};

export default ColorizedPass;