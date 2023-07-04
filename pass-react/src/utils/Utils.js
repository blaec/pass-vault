export const isArrayExist = (array) => {
    return array.length > 0;
};

export const isObjectExist = (object) => {
    return object && (Object.keys(object).length !== 0 || object.constructor !== Object);
};

export const isStringExist = (string) => {
    return string !== undefined && string !== null && string.trim() !== '';
};

export const convertToPassword = (string) => {
    const passBullet = String.fromCharCode(9679);
    const passLen = isObjectExist(string) ? string.toString().length : 0;

    return passBullet.repeat(passLen);
};

export const copyToClipboard = (text) => {
    if (window.isSecureContext && navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            console.log('Async: Copying to clipboard was successful!');
        }, (err) => {
            console.error('Async: Could not copy text: ', err);
        });
    } else {
        alert("Copy is not supported, copy text manually.");
    }
};

/**
 * Strip supplied string from spaces and dashes
 * @param str string before change
 * @returns string without spaces and dashes
 */
export const stripString = (str) => {
    return str.replace(/\s/g, '').replace(/-/g, '').toLowerCase();
};

export const dateToExpirationDate = (date) => {
    const formatDate = (option) => new Intl.DateTimeFormat('en', option).format(new Date(date));
    const month = formatDate({ month: '2-digit' });
    const year = formatDate({ year: '2-digit' });

    return `${month}/${year}`
};

export const expirationDateToDate = (exp) => {
    if (exp === undefined) return undefined;

    const dateParts = exp.split("/");

    return `01/${dateParts[0]}/20${dateParts[1]}`;
};

export const getAge = (date) => {
    return Math.floor((new Date() - new Date(date)) / (1000 * 3600 * 24));
};

export const filterTypedCollection = (collection, type, search) => {
    return collection
        .map(item => ({...item, type: type}))
        .filter(item => item.title.toLowerCase().includes(search));
};

export const fakeAuth = (credentials) =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2342f2f1d131rf12'), 250);
        console.log(credentials);
    });