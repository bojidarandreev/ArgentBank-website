const initialState = {
    id: '',
    email: '',
    userName: '',
    firstName: '',
    lastName: '',
    token: '',
    isLogged: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, ...action.payload, isLogged: true };
        case 'LOGOUT':
            return { ...initialState };
        case 'GET_INFO':
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default userReducer;