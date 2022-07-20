export const isArrayExist = (array) => {
    return array.length > 0;
};

export const isObjectExist = (object) => {
    return object && (Object.keys(object).length !== 0 || object.constructor !== Object);
};
