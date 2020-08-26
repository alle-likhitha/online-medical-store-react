import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../hoc/Shared/utility';

const initialState = {
    // token: null,
    // userId: null,
    error: null,
    loading: false,
    userid : null,
    authRedirectPath: '/'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true, userid: null } );
};

// const authSuccess = (state, action) => {
//     return updateObject( state, { 
//         // token: action.idToken,
//         // userId: action.userId,
//         error: null,
//         loading: false
//      } );
// };

const authFail = (state, action) => {
    // debugger
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const authLogout = (state, action) => {
    // debugger
    const local_state=updateObject(state, { userid: null }) 
    // debugger
    // localStorage.removeItem('userid');
    return local_state;
};

const setAuthRedirectPath = (state, action) => {
    // debugger
    return updateObject(state, { authRedirectPath: action.path,
        error: null,
        loading: false,
        userid: action.userid })
}

const reducer = ( state = initialState, action ) => {
    // debugger
    console.log(action.type)
    console.log(state)
    console.log("-=-==--=-=")
    switch ( action.type ) {
        
        case actionTypes.AUTH_START: return authStart(state, action);
        // case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;