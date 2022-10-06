export const isArrayExist = (array) => {
    return array.length > 0;
};

export const isObjectExist = (object) => {
    return object && (Object.keys(object).length !== 0 || object.constructor !== Object);
};

export const convertToPassword = (string) => {
    const passBullet = String.fromCharCode(9679);
    const passLen = isObjectExist(string) ? string.toString().length : 0;

    return passBullet.repeat(passLen);
};

export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        console.log('Async: Copying to clipboard was successful!');
    }, (err) => {
        console.error('Async: Could not copy text: ', err);
    });
};

/**
 * Strip supplied string from spaces and dashes
 * @param str string before change
 * @returns string without spaces and dashes
 */
export const stripString = (str) => {
    return str.replace(/\s/g, '').replace(/-/g, '').toLowerCase();
};