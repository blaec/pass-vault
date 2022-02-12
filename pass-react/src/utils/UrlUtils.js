export const reactLinks = {
    home: "/passwords",
    passwords: "/passwords",
    folders: "/folders",
    settings: "/settings",
};

let baseFolderApi = "/folder/";
export const folderApi = {
    get: {
        getAll: `${baseFolderApi}get-all`,
    },
    post: {
        save: `${baseFolderApi}create/`,
    },
    put: {
        update: `${baseFolderApi}update/`,
    },
    delete: {
        delete: `${baseFolderApi}delete/`,
    },
};

let basePasswordApi = "/password/";
export const passwordApi = {
    get: {
        getAll: `${basePasswordApi}get-all`,
    },
    post: {
        save: `${basePasswordApi}create/`,
    },
    put: {
        update: `${basePasswordApi}update/`,
    },
    delete: {
        delete: `${basePasswordApi}delete/`,
    },
};
