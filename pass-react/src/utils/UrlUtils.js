export const reactLinks = {
    home: "/passwords",
    passwords: "/passwords",
    folders: "/folders",
    settings: "/settings",
};

let baseFolderApi = "/folders/";
export const folderApi = {
    get: {
        getAll: `${baseFolderApi}get-all`,
    },
    post: {
        save: `${baseFolderApi}create/`,
    },
    delete: {
        delete: `${baseFolderApi}delete/`,
    },
};
