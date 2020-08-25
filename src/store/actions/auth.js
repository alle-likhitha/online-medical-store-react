import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

// export const authSuccess = (userId) => {
//     return {
//         type: actionTypes.AUTH_SUCCESS,
//         // idToken: token,
//         // userId: userId
//     };
// };

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        // const authData = {
        //     email: email,
        //     password: password,
        //     returnSecureToken: true
        // };
        const queryparams = '?email=' +email+'&password='+password
        let url = 'http://localhost:9000/login/add-new-user'+queryparams;
        if (!isSignup) {
            url = 'http://localhost:9000/login/verify-login'+queryparams;
        }
        axios.get(url)
            .then(response => {
                // reponse => data 
                //reponse => error ->  
                console.log(response)
                if (response.data.data){
                    dispatch(setAuthRedirectPath('/med'))
                }else{
                    dispatch(authFail(response.data.error));
                }
            })
            // .catch(err => {
            //     console.log(err)
            // });
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};

// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem('token');
//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem('expirationDate'));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout());
//             } else {
//                 const userId = localStorage.getItem('userId');
//                 dispatch(authSuccess(token, userId));
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//             }   
//         }
//     };
// };