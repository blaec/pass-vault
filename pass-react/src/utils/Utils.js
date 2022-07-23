export const isArrayExist = (array) => {
    return array.length > 0;
};

export const isObjectExist = (object) => {
    return object && (Object.keys(object).length !== 0 || object.constructor !== Object);
};

export const convertToPassword = (string) => {
    const passBullet = String.fromCharCode(9679);
    const passLen = isObjectExist(string) ? string.length : 0;

    return passBullet.repeat(passLen);
};
