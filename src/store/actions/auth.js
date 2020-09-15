import axios from 'axios';

import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};



export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
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
                    dispatch(setAuthRedirectPath('/med', email))
                }else{
                    dispatch(authFail(response.data.error));
                }
            })

    };
};

export const alle =()=>{
    return{
        type: actionTypes.ALLE
    }
}

export const setAuthRedirectPath = (path,email) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path,
        userid: email
        
    };
};

