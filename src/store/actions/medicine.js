import axios from 'axios';

import * as actionTypes from './actionTypes';

// export const medicinefetch = () => {
//     return {
//         type: actionTypes.MEDICINE_FETCH
//     };
// };

export const fetchMedicSuccess=(fetchedMedic)=>{
    return {
        type:actionTypes.MEDICINE_FETCH_SUCCESS,
        data:fetchedMedic
    }
}
export const fetchMedicStart=()=>{
    return {
        type:actionTypes.MEDIC_FETCH_START
    }
}
export const fetchMedicFail=()=>{
    return {
        type:actionTypes.MEDICINE_FETCH_FAIL
    }
}
export const addingmed = (data)=>{
    return{
        type:actionTypes.ADD_MEDICINE_MED,
        data:data
    }
}


export const fetchMedicine = (category) => {
    return dispatch => {
        dispatch(fetchMedicStart());
        const queryParams = '?category='+category
        axios.get( 'http://localhost:9000/drugs/get-drug-category' + queryParams)
            .then( res => {
                console.log(res)
                const fetchedMedic = [];
                for ( let key in res.data ) {
                    fetchedMedic.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchMedicSuccess(res.data.data));
            } )
            .catch( err => {
                dispatch(fetchMedicFail(err));
            } );
    };
};