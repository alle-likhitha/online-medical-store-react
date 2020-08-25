import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../hoc/Shared/utility';

const initialState = {
    // token: null,
    // userId: null,
    data : [],
    addedItems : [],
    error: null,
    total:0,
    loading: false,
};
const addingmed = (state,action) => {
    console.log('addedlist',state.addedItems)
    console.log(action.data)
    // console.log(state.data)
    const additem = state.data.find(item=> item._id === action.data._id)
    // const additem = action.data
    // console.log(additem)
    let existed_item= state.addedItems.find(item=> additem._id === item._id) ? true : false
    // console.log(existed_item)
    if(existed_item)
    {
        additem.quantity += 1 
        return updateObject(state, {total: state.total + additem.Price })
   }
   else{
        additem.quantity = 1;
       //calculating the total
        let newTotal = state.total + additem.Price 
        console.log(newTotal)
        return updateObject(state, { addedItems: [...state.addedItems, additem], total : newTotal})

       
   }
};

const removingmed = (state , action)=>{
    const remove = state.addedItems.find(item=> item._id === action._id)
    if (remove.quantity === 1){
        let new_items = state.addedItems.filter(item=>item._id !== action._id)
        let newTotal = state.total - remove.Price
        return updateObject(state, {addedItems: new_items, total: newTotal.toFixed(2) })
    }
    else{
        let newitem = state.addedItems.filter(item=> action._id !== item._id)

    let newtot = state.total - (remove.Price * remove.quantity)
    return updateObject(state, {addedItems: newitem, total: newtot.toFixed(2)})
    }
    
}
const fetchMedicStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};

const fetchMedicSuccess = (state, action) => {
    return updateObject( state, { 
        // token: action.idToken,
        // userId: action.userId,
        data : action.data,
        error: null,
        loading: false
     } );
};
const purchaseMedicStart = (state,action)=>{
    return updateObject(state)
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.MEDIC_FETCH_START: return fetchMedicStart(state, action);
        case actionTypes.ADD_MEDICINE_MED: return addingmed(state,action)
        case actionTypes.REMOVE_MEDICINE_MED: return removingmed(state,action)
        // case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.MEDICINE_FETCH_FAIL: return authFail(state, action);
        case actionTypes.MEDICINE_FETCH_SUCCESS: return fetchMedicSuccess(state, action);
        case actionTypes.PURCHASE_MEDIC_START: return purchaseMedicStart(state,action)
        // case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;