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
export const removingmed = (data)=>{
    return{
        type:actionTypes.REMOVE_MEDICINE_MED,
        data : data
    }
}
export const purchaseMedicStart=()=>{
    return {
        type:actionTypes.PURCHASE_MEDIC_START
    }
}

export const purchaseMedicSuccess = ( id, orderData ) => {
    return {
        type: actionTypes.PURCHASE_MEDIC_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseMedicFail = ( error ) => {
    return {
        type: actionTypes.PURCHASE_MEDIC_FAIL,
        error: error
    };
}


export const purchaseMedic = ( orderData,userid) => {
    return dispatch => {
        console.log(orderData)
        dispatch( purchaseMedicStart() );
        axios.post( 'http://localhost:9000/address/add-address?user-email=' + userid, orderData )
            .then( response => {
                console.log(response)
                dispatch( purchaseMedicSuccess( response.data.orderid, orderData ) );
            } )
            .catch( error => {
                dispatch( purchaseMedicFail( error ) );
            } );
    };
};

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