const { hostname, protocol } = window.location;

const apiRoutes = {
    userAuth: `${protocol}//${hostname}:5000/api/auth/users/register`,
    adminAuth: `${protocol}//${hostname}:5000/api/auth/admin_auth/register`,
    logIn: `${protocol}//${hostname}:5000/api/auth/users/logIn`,
    approveRegRequest: `${protocol}//${hostname}:5000/api/users/request/registeration`,
    rejectRegRequest: `${protocol}//${hostname}:5000/api/users/request/registeration/reject`,
    setPermission: `${protocol}//${hostname}:5000/api/staff/permission/set`,
    setRoles: `${protocol}//${hostname}:5000/api/user/permission/roles/set`,
    getAllUsers: `${protocol}//${hostname}:5000/api/users/all`,
    getUsersById: `${protocol}//${hostname}:5000/api/users/id`,
    updateAccount: `${protocol}//${hostname}:5000/api/users/account/update`,
    deleteAccount: `${protocol}//${hostname}:5000/api/users/account/delete`,
    createToken: `${protocol}//${hostname}:5000/api/token/generate`,
    getTokens: `${protocol}//${hostname}:5000/api/token/getToken`,
    deleteToken: `${protocol}//${hostname}:5000/api/token/deleteToken`,
    sendMail: `${protocol}//${hostname}:5000/api/user/sendMail`,
    getGroupByUserId: `${protocol}//${hostname}:5000/api/user/groups/all`,
    getGroupMembers: `${protocol}//${hostname}:5000/api/user/groups/members`,
    createGroup: `${protocol}//${hostname}:5000/api/user/groups/create`,
    addGroupMembers: `${protocol}//${hostname}:5000/api/user/groups/addMembers`,
    editGroup: `${protocol}//${hostname}:5000/api/user/groups/edit`,
    deleteGroupMembers: `${protocol}//${hostname}:5000/api/user/groups/deleteMemebers`,
    deleteGroup: `${protocol}//${hostname}:5000/api/user/groups/deleteGroup`,
    addDocument: `${protocol}//${hostname}:5000/api/user/documents/add`,
    addFeedback: `${protocol}//${hostname}:5000/api/documents/feedback/add`,
    deleteFeedback: `${protocol}//${hostname}:5000/api/documents/feedback/delete`,
    getDocFeedBack: `${protocol}//${hostname}:5000/api/documents/feedback/all`,
    editDocument: `${protocol}//${hostname}:5000/api/user/documents/edit`,
    deleteDocument: `${protocol}//${hostname}:5000/api/user/documents/delete`,
    getAllDocs: `${protocol}//${hostname}:5000/api/documents/all`,
    getDocsById: `${protocol}//${hostname}:5000/api/documents/id`,
    getDocsGroupId: `${protocol}//${hostname}:5000/api/documents/groups/id`,
    approveDocument: `${protocol}//${hostname}:5000/api/document/approve`,
    rejectDocument: `${protocol}//${hostname}:5000/api/document/reject`,
    getSignatures: `${protocol}//${hostname}:5000/api/signature/get`,
    addSignature: `${protocol}//${hostname}:5000/api/signature/add`,
    deleteSignature: `${protocol}//${hostname}:5000/api/signature/delete`,
    getNotifications: `${protocol}//${hostname}:5000/api/notifications/get`,
    updateNotification: `${protocol}//${hostname}:5000/api/notification/update`,
    deleteNotification: `${protocol}//${hostname}:5000/api/notification/delete`,
};

export default apiRoutes;
