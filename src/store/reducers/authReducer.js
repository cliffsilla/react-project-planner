const initState = {
    authErr: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('Login Error');
            return {
                ...state,
                authErr: 'Login Failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('Login Success');
            return {
                ...state,
                authErr: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signed Out');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SignUp Success');
            return {
                ...state,
                authErr:null
            }
        case 'SIGNUP_ERROR':
            console.log('SignUp Error');
            return{
                ...state,
                authErr: action.err.message
            }
        default:
            return state
    }
}

export default authReducer;