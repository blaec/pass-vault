import React from 'react';

import Box from "@mui/material/Box";

const isDefault = (type) => type === 'symbol';
const getType = (regex, char, fallBack, type) => isDefault(fallBack) && regex.test(char) ? type : fallBack;
const numberType = (char, fallBack) => getType(/^\d$/, char, fallBack, 'number');
const smallLatinType = (char, fallBack) =>  getType(/^[a-z]+$/, char, fallBack, 'smallLatin');
const capitalLatinType = (char, fallBack) => getType(/^[A-Z]+$/, char, fallBack, 'capitalLatin');
const _colorScheme = Object.freeze(
    {
        number: {color: 'red'},
        smallLatin: {color: 'black'},
        capitalLatin: {color: 'green'},
        symbol: {color: 'blue'},
    }
);
const _inline = {display: 'inline'};
const output = [];


const ColorizedPass = (props) => {
    const {pass} = props;

    for (let position = 0; position < pass.length; position++) {
        const char = pass[position];
        const charType = numberType(char, capitalLatinType(char, smallLatinType(char, 'symbol')));

        output[position] = (
            <Box
                key={position}
                sx={[_colorScheme[charType], _inline]}
            >
                {char}
            </Box>
        );
    }


    return <>{output}</>;
};

export default ColorizedPass;