const keys = Object.freeze(
    {
        selectedFolder: 'selected-folder',
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
