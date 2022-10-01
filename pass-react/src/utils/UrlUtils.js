export const reactLinks = {
    home: "/passwords",
    allItems: "/all-items",
    passwords: "/passwords",
    newPassword: "/new-password",
    editPassword: "/update-password",
    secureNotes: "/secure-notes",
    newSecureNote: "/new-secure-note",
    editSecureNote: "/update-secure-note",
    creditCards: "/credit-cards",
    newCreditCard: "/new-credit-card",
    editCreditCard: "/update-credit-card",
    trash: "/trash",
    folders: "/folders",
    folderItemsEndpoint: "/folder-items/",
    folderItems: "/folder-items/:folderId",
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

let basePassGeneratorApi = "/pass-generator/";
export const passgenApi = {
    post: {
        strength: `${basePassGeneratorApi}get-strength`,
        create: `${basePassGeneratorApi}create/`,
    },
};
