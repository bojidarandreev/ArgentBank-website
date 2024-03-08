export const login = (payload) => {
    return {
        type: 'LOGIN',
        payload,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const getUserInfoAction = (payload) => {
    return {
        type: 'GET_INFO',
        payload,
    };
};

export const changeUserName = (payload) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload,
    };
};

