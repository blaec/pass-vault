import React from 'react';

import Box from "@mui/material/Box";

const isDefault = (type) => type === 'symbol';
const getType = (regex, char, fallBack, type) => isDefault(fallBack) && regex.test(char) ? type : fallBack;
const isNumber = (char, fallBack) => getType(/^\d$/, char, fallBack, 'number');
const isSmallLatin = (char, fallBack) =>  getType(/^[a-z]+$/, char, fallBack, 'smallLatin');
const isCapitalLatin = (char, fallBack) => getType(/^[A-Z]+$/, char, fallBack, 'capitalLatin');
const _colorScheme = Object.freeze(
    {
        number: {color: 'red'},
        smallLatin: {color: 'black'},
        capitalLatin: {color: 'green'},
        symbol: {color: 'blue'},
    }
);
const _inline = {display: 'inline'};
const colorMessage = [];


const ColorizedPass = (props) => {
    const {pass} = props;

    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];
        let charType = isCapitalLatin(char, isSmallLatin(char, isNumber(char, 'symbol')));

        colorMessage[i] = (
            <Box
                key={i}
                sx={[_colorScheme[charType], _inline]}
            >
                {char}
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