export const reactLinks = {
    home: "/passwords",
    allItems: "/all-items",
    passwords: "/passwords",
    folderItemsEndpoint: "/folder-items/",
    folderItems: "/folder-items/:folderId",
    secretNotes: "/secret-notes",
    creditCards: "/credit-cards",
    trash: "/trash",
    newPassword: "/new-password",
    editPassword: "/update-password",
    newSecretNote: "/new-secret-note",
    editSecretNote: "/update-secret-note",
    newCreditCard: "/new-credit-card",
    editCreditCard: "/update-credit-card",
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

let baseItemApi = "/items/";
export const itemApi = {
    get: {
        getAll: `${baseItemApi}get-all`,
        getAllInFolder: `${baseItemApi}get-all-in-folder/`,
        // getAllByType: `${baseItemApi}get-all-by-type/`,
    },
    post: {
        create: `${baseItemApi}create/`,
    },
    put: {
        update: `${baseItemApi}update/`,
    },
    delete: {
        delete: `${baseItemApi}delete/`,
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
