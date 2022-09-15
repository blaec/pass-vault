export const reactLinks = {
    home: "/passwords",
    allItems: "/all-items",
    passwords: "/passwords",
    folderItemsEndpoint: "/folder-items/",
    folderItems: "/folder-items/:folderId",
    secureNotes: "/secure-notes",
    creditCards: "/credit-cards",
    trash: "/trash",
    newPassword: "/new-password",
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
        getAllByFolder: `${basePasswordApi}get-all-by-folder/`,
    },
    post: {
        create: `${basePasswordApi}create/`,
    },
    put: {
        update: `${basePasswordApi}update/`,
    },
    delete: {
        delete: `${basePasswordApi}delete/`,
    },
};

let baseSecretNoteApi = "/secret-note/";
export const secretNoteApi = {
    get: {
        getAll: `${baseSecretNoteApi}get-all`,
        getAllByFolder: `${baseSecretNoteApi}get-all-by-folder/`,
    },
    post: {
        create: `${baseSecretNoteApi}create/`,
    },
    put: {
        update: `${baseSecretNoteApi}update/`,
    },
    delete: {
        delete: `${baseSecretNoteApi}delete/`,
    },
};

let basePassGeneratorApi = "/pass-generator/";
export const passgenApi = {
    post: {
        strength: `${basePassGeneratorApi}get-strength`,
        create: `${basePassGeneratorApi}create/`,
    },
};
