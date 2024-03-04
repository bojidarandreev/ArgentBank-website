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

export const test = (payload) => {
    return {
        type: 'TEST',
        payload,
    };
};