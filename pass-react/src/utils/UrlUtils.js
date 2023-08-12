export const reactLinks = {
    home: "/all-items",
    login: "/login",
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
    passwordHistory: "/password-history",
    trash: "/trash",
    folders: "/folders",
    folderItemsEndpoint: "/folder-items/",
    folderItems: "/folder-items/:folderId",
    passwordHealth: "/password-health",
    weakPassword: "/password-health/weak",
    reusedPassword: "/password-health/reused",
    oldPassword: "/password-health/old",
};

let baseAuthApi = "/jwt/";
export const authApi = {
    post: {
        createAuthenticationToken: `${baseAuthApi}authenticate`,
    },
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
        getAllActive: `${baseItemApi}get-all-active`,
        getAllDeleted: `${baseItemApi}get-all-deleted`,
        getAllInFolder: `${baseItemApi}get-all-in-folder/`,
        getAllHealthItems: `${baseItemApi}get-all-health-items/`,
    },
    post: {
        create: `${baseItemApi}create/`,
    },
    put: {
        update: `${baseItemApi}update/`,
        restore: `${baseItemApi}restore/`,
        moveToTrash: `${baseItemApi}move-to-trash/`,
    },
    delete: {
        delete: `${baseItemApi}delete/`,
        emptyTrash: `${baseItemApi}empty-trash`,
    },
};

let basePassGeneratorApi = "/pass-generator/";
export const passgenApi = {
    post: {
        strength: `${basePassGeneratorApi}get-strength`,
        create: `${basePassGeneratorApi}create/`,
    },
};

export const isSearchable = (pathname) => {
    const {
        allItems,
        passwords,
        secureNotes,
        creditCards,
        trash,
        weakPassword,
        reusedPassword,
        oldPassword,
        folderItemsEndpoint
    } = reactLinks;
    const searchable = [
        allItems,
        passwords,
        secureNotes,
        creditCards,
        trash,
        weakPassword,
        reusedPassword,
        oldPassword,
        folderItemsEndpoint
    ];

    return searchable.filter(url => pathname.startsWith(url)).length === 1;
};

export const isTrash = (pathname) => {
    return pathname.startsWith(reactLinks.trash);
}