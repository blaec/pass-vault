const keys = Object.freeze(
    {
        selectedFolder: 'selected-folder',
        returnLocation: 'return-location',
        authToken: 'auth-token',
    }
);

const globalFunctions = (key) => ({
    set: (value) => localStorage.setItem(key, value),
    get: () => localStorage.getItem(key),
    getNumeric: () => +localStorage.getItem(key),
    getBoolean: () => localStorage.getItem(key) === 'true',
    remove: () => localStorage.removeItem(key),
});

export const currentFolder = {
    set: globalFunctions(keys.selectedFolder).set,
    get: globalFunctions(keys.selectedFolder).get,
    remove: globalFunctions(keys.selectedFolder).remove,
}

export const initialLocation = {
    set: globalFunctions(keys.returnLocation).set,
    get: globalFunctions(keys.returnLocation).get,
    remove: globalFunctions(keys.returnLocation).remove,
}

export const authentication = {
    set: globalFunctions(keys.authToken).set,
    get: globalFunctions(keys.authToken).get,
    remove: globalFunctions(keys.authToken).remove,
}
